function convertToNumeric(phoneNumber) {
    const buttonMappings = {
        'ABC': '2',
        'DEF': '3',
        'GHI': '4',
        'JKL': '5',
        'MNO': '6',
        'PQRS': '7',
        'TUV': '8',
        'WXYZ': '9'
    };

    let phoneNumberNumeric = "";

    for (let i = 0; i < phoneNumber.length; i++) {
        const char = phoneNumber[i].toUpperCase();
        let addedChar = char;

        for (let button in buttonMappings) {
            if (button.includes(char)) {
                addedChar = buttonMappings[button];
                break;
            }
        }

        phoneNumberNumeric += addedChar;
    }

    return phoneNumberNumeric;
}

const phoneNumber = prompt();

const phoneNumberNumeric = convertToNumeric(phoneNumber);

console.log(phoneNumberNumeric);
