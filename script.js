
const secondHand=document.getElementById('second-hand');
const minuteHand=document.getElementById('minute-hand');
const hourHand=document.getElementById('hour-hand');

function clockTick(params) {
    const date = new Date();
    const seconds=date.getSeconds()/60;
    const minutes=(seconds+date.getMinutes())/60;
    const hours=(minutes+date.getHours())/12;

    rotateClockHand(secondHand,seconds);
    rotateClockHand(minuteHand,minutes);
    rotateClockHand(hourHand,hours);
}
function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate',rotation*360);
}
setInterval(clockTick,1000);


// Forma-----------------------------------------

function submitForm() {
    // Gaunami duomenys iš formos
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        streetNumber: document.getElementById('streetNumber').value,
        houseNumber: document.getElementById('houseNumber').value,
        mark1: parseInt(document.getElementById('mark1').value),
        mark2: parseInt(document.getElementById('mark2').value),
        mark3: parseInt(document.getElementById('mark3').value),
        mark4: parseInt(document.getElementById('mark4').value),
        mark5: parseInt(document.getElementById('mark5').value),
    };

    // Apskaičiuojamas ir išvedamas požymių vidurkis
    const average = calculateAverage(formData);
    console.log(' vidurkis:', average);

    // Saugoma informacija į JavaScript objektą
    const resultObject = {
        Vardas: formData.firstName,
        Pavardė: formData.lastName,
        'El. pašto adresas': formData.email,
        'Telefono numeris': formData.phone,
        Adresas: `${formData.streetNumber}, ${formData.houseNumber},${formData.city}`,
        'Matematikos egzaminas': formData.mark1,
        'Anglų egzaminas': formData.mark2,
        'Programavimo egzaminas': formData.mark3,
        'Istorijos egzaminas': formData.mark4,
        'Lietuvių egzaminas': formData.mark5,
    };
    
    // Išvedamas rezultatas į naršyklės konsolę
    console.log(resultObject);
    // Išvedamas rezultatas į tinklalapio HTML
    displayResult(resultObject, average);
}

function calculateAverage(formData) {
    const marks = [
        formData.mark1,
        formData.mark2,
        formData.mark3,
        formData.mark4,
        formData.mark5,
    ];

    const sum = marks.reduce((total, mark) => total + mark, 0);
    return sum / marks.length;
}

function displayResult(resultObject, average) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    const resultNameLine = document.createElement('h2');
    resultNameLine.textContent = `Jūsų įvesti duomenys`;
    resultContainer.appendChild(resultNameLine);

    for (const [key, value] of Object.entries(resultObject)) {
        const resultLine = document.createElement('p');
        resultLine.textContent = `${key}: ${value}`;
        resultContainer.appendChild(resultLine);
    }
    //Vidurkio atvaizdavimas
    const averageLine = document.createElement('p');
    averageLine.textContent = `${resultObject.Vardas} ${resultObject.Pavardė} (${resultObject['El. pašto adresas']}): ${average}`;
    resultContainer.appendChild(averageLine);
}

