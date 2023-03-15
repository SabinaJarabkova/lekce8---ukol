console.log('funguju!');

let side = 1;
let kostka = document.querySelector('.dice');
//console.log(kostka)
//kostka.src = `img/side${side}.svg`

const counterFunction = () => {
    side = side + 1;

    if (side >= 1 && side <= 6) {
        kostka.src = `img/side${side}.svg`
        //return side
    }

    if (side > 6 || side < 1) {
        side = 1;
        kostka.src = `img/side${side}.svg`
        //return side
    }
}
//console.log(counterFunction());

document.addEventListener('keydown', counterFunction);

/*
const hodKostkou = (pocitadlo) => {
    const kostkaObrazek = document.querySelector('.dice');
    kostkaObrazek.addEventListener('keydown', pocitadlo);
    kostkaObrazek.src = `side${counter}`;
}

console.log(hodKostkou(counter))
*/