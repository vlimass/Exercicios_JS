console.log("CONVERTER CELSIUS-FAHRENHEIT:");

const verifyTemperatureScale = (string) => {
    let tempScaleResult;

    if (string.includes('C') || string.includes('c')) {
        tempScaleResult = 'celsius';
    } else if (string.includes('F') || string.includes('f')) {
        tempScaleResult = 'fahrenheit';
    } else {
        tempScaleResult = 'invalid';
    }

    return tempScaleResult;
}

const getTemperatureValue = (string) => {
    let newString = string;

    if(string.includes('C') || string.includes('c')){
        newString = string.toUpperCase().replace('C', '');
    }
    if(string.includes('F') || string.includes('f')){
        newString = string.toUpperCase().replace('F', '');
    }

    return Number(newString);
}

console.log(getTemperatureValue('60F'))

const convertScales = (input) => {
    const tempScale = verifyTemperatureScale(input);
    const tempValue = getTemperatureValue(input);
    let finalValue = 0;
    let finalString = '';

    switch (tempScale) {
        case 'celsius': 
            finalValue = (tempValue - 32) * 5/9;
            finalString = finalValue.toFixed(2).toString() + 'F';
            break;

        case 'fahrenheit':
            finalValue = tempValue * 9/5 + 32;
            finalString = finalValue.toFixed(2).toString() + 'C';
            break;

        case 'invalid': 
            finalString = 'inválido';
            break;
    };

    return finalString;
}

console.log(`Resultado final: ${convertScales('213.4FC')}`);
