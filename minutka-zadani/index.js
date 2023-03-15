console.log('funguju!');

const zvoneni = () => {
    const alarm = document.querySelector('.alarm');
    alarm.classList.add('alarm--ring');
    const audio = document.querySelector('audio');
    audio.play();
}

//const userInput = prompt('zadej cas zvoneni budiku v milisekundach');

const timerId = setTimeout(zvoneni, 5000);

//const timerId = setTimeout(zvoneni, userInput);



const changeHeader = () => {
    const header = document.querySelector('h1');
    header.textContent = "ALARM ZRUŠENÝ";
}

const tlacitko = document.querySelector('.button');
tlacitko.addEventListener('click', () => {clearTimeout(timerId);});
tlacitko.addEventListener('click', changeHeader);


