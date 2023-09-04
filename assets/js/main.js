function createField(elementDOM, squareNumber) {

    let i = 0;
    while (i < squareNumber) {

        const squareMarkup = `<div class="square">${i + 1}</div>`;

        //document.querySelector('.field').insertAdjacentHTML('beforeend', squareMarkup);

        //document.querySelector('.field').innerHTML += squareMarkup;

        const squareDOM = document.createElement('div');

        const squareTag = document.createElement('h1')

        const squareValue = i +1;

        squareTag.append(squareValue);

        squareDOM.append(squareTag);

        squareDOM.classList.add('square');
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

document.getElementById('create-field').addEventListener('click', function () {

    const fieldDOM = document.querySelector('.field');

    createField(fieldDOM, 100);

})


