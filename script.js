// creazione quadrati
// const buttonElement = document.querySelector("#start");

// buttonElement.addEventListener("click", function() {
//    for(let i = 0; i <= 100; i++) {
//        const divElement = document.createElement("div");
//        divElement.classList.add("square");
//        document.querySelector(".grid").innerHTML = divElement;
//        console.log(this);
//    }
// });

// console.log();

// ------- CAMBIO METODO ----------

const gridElement = document.querySelector(".grid");
const buttonElement = document.querySelector("#start");


function generateBombPositions() {
    const bombPositions = [];
    while(bombPositions.length < 16) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if(!bombPositions.includes(randomNumber)) {
            bombPositions.push(randomNumber);
        }
    }
    return bombPositions;
}





buttonElement.addEventListener("click", function() {

    // in questo modo la griglia non si somma alle altre ogni volta che clicco il pulsante
    gridElement.innerHTML = '';
    
    gridElement.classList.toggle('nascosta');


    const bombPositions = generateBombPositions();



    for(let i = 1; i <= 100; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.textContent = i;
        gridElement.appendChild(squareElement);


        // cambio colore al click del numero

        squareElement.addEventListener('click', function() {
            if (bombPositions.includes(i)) {
                squareElement.style.backgroundColor = 'red';
                console.log('Hai calpestato una bomba ', i);
            } else {
                // aggiungo il numero della casella in console
                console.log('Sei ancora salvo, per ora ', i);
                squareElement.style.backgroundColor = 'green';

            }
            
            
        });


    }

    console.log(bombPositions);


});









