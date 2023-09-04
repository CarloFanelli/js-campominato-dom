function createField(elementDOM, squareNumber) {

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
        squareTag.classList.add('d-none')

        elementDOM.append(squareDOM);

        squareDOM.addEventListener('click', function () {

            console.log(squareValue);

            //console.log(this);

            this.classList.toggle('bg-info')

            //squareTag.classList.toggle('d-none')
        })

        i++;
    }

}

function generateBombs(squareNumber) {

    const bombNumber = 16;
    const bombsPositions = [];

    for (let i = 0; i < bombNumber; i++) {

        const bombPosition = Math.floor(Math.random() * (squareNumber + 1) );
        console.log(bombPosition);

        if (bombsPositions.includes(bombPosition)) {
            i--;
        }else{
            bombsPositions.push(bombPosition);
        }

        console.log(bombsPositions);

    }

}

/* document.getElementById('create-field').addEventListener('click', function () {

    const fieldDOM = document.querySelector('.field');

    createField(fieldDOM, 100);

}) */

document.getElementById('generateGame').addEventListener('submit', function (e) {
    e.preventDefault();

    const fieldDOM = document.querySelector('.field');

    const difficultDOM = document.getElementById('difficult');

    console.log(difficultDOM.value);

    if (difficultDOM.value === 'easy') {

        createField(fieldDOM, 100);
        generateBombs(100);

    } else if (difficultDOM.value === 'mid') {

        createField(fieldDOM, 81);
        generateBombs(81);

    } else if (difficultDOM.value === 'hard') {

        createField(fieldDOM, 49);
        generateBombs(49);

    }


})


