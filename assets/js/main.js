/**
 * 
 * @param {} elementDOM element where the game has to be insert
 * @param {number} squareNumber number of square, for choosing difficult of the game
 */


function createField(elementDOM, squareNumber) {

    const bombsPositions = generateBombs(squareNumber);

    let playerPoints = 0;

    let i = 0;

    while (i < squareNumber) {

        const squareMarkup = `<div class="square">${i + 1}</div>`;

        //document.querySelector('.field').insertAdjacentHTML('beforeend', squareMarkup);

        //document.querySelector('.field').innerHTML += squareMarkup;

        const squareDOM = document.createElement('div');

        const squareTag = document.createElement('h1')

        const squareValue = i + 1;

        squareTag.append(squareValue);

        squareDOM.append(squareTag);

        squareDOM.classList.add('square');
        squareDOM.style.width = `calc( 100% / ${Math.sqrt(squareNumber)})`;
        squareDOM.setAttribute('id',`square${i}`)
        
        squareTag.classList.add('d-none');

        elementDOM.append(squareDOM);

        i++;
        squareDOM.addEventListener('click', function Event () {

            console.log(squareValue);

            //console.log(this);

            //squareTag.classList.toggle('d-none')

            /*             console.log(checkBomb(squareValue, bombsPositions, squareDOM, playerPoints));
             */

            if (bombsPositions.includes(squareValue)) {

                this.classList.add('bg-danger')

                document.getElementById('punteggio').innerHTML = `hai perso, il tuo punteggio è: ${playerPoints}`;

                //this.removeEventListener('click', Event ) ;

                for (let i = 0; i < squareNumber; i++) {    


                    document.getElementById(`square${i}`).removeEventListener('click', Event);

                    //console.log(allSquareDOM);

                }

            } else if(!bombsPositions.includes(squareValue)){

                this.classList.add('bg-info')

                this.removeEventListener('click', Event);

                ++playerPoints;
                
                document.getElementById('punteggio').innerHTML = playerPoints;

            }

        })
    }

}

/* function checkBomb(squareValue, bombsPositions, squareDOM,playerPoints) {

    if (bombsPositions.includes(squareValue)) {

        squareDOM.classList.add('bg-danger')

    } else {

        squareDOM.classList.add('bg-info')

        playerPoints++;

    }
    //console.log(playerPoints);

    document.getElementById('punteggio').innerHTML = playerPoints;

    return playerPoints;
} */


/**
 * 
 * @param {number} squareNumber number of squares to play
 * @returns array with bomb position
 */
function generateBombs(squareNumber) {

    const bombNumber = 16;
    const bombsPositions = [];

    for (let i = 0; i < bombNumber; i++) {

        const bombPosition = Math.floor(Math.random() * (squareNumber + 1));
        // console.log(bombPosition);

        if (bombsPositions.includes(bombPosition)) {
            i--;
        } else {
            bombsPositions.push(bombPosition);
        }

        //console.log(bombsPositions);

    }

    return bombsPositions;

}

// game generator with difficults

document.getElementById('generateGame').addEventListener('submit', function (e) {
    e.preventDefault();

    const fieldDOM = document.querySelector('.field');

    const difficultDOM = document.getElementById('difficult');

    console.log(difficultDOM.value);

    if (difficultDOM.value === 'easy') {

        createField(fieldDOM, 100);

    } else if (difficultDOM.value === 'mid') {

        createField(fieldDOM, 81);

    } else if (difficultDOM.value === 'hard') {

        createField(fieldDOM, 49);

    }


})

// reload page to reset

document.getElementById('reload').addEventListener('click', function () {
    location.reload();
})


