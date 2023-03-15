console.log('link');

//UKOL 1

const justFood = (numberOfPeople) => {
    price = numberOfPeople * 1000;
    return `catering od Just Food pro ${numberOfPeople} lidí za ${price} Kč`

}

const yourMama = (numberOfPeople) => {
    price = numberOfPeople * 2000;
    return `catering od Your Mama pro ${numberOfPeople} lidí za ${price} Kč`
}

const flavourHeaven = (numberOfPeople) => {
    price = numberOfPeople * 3000;
    return `catering od Flavour Heaven pro ${numberOfPeople} lidí za ${price} Kč`
}

const createEvent = (nameOfEvent, catering) => {
    udalost = `Událost ${nameOfEvent} s `;
    pocetOsob = prompt('zadej počet osob');
    return `${udalost} ${catering(pocetOsob)}`
}


//UKOL 2



