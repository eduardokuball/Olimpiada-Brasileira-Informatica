const phoneNumber = prompt('Número de telefone');
let phoneNumberNumeric = "";
const button1 = ['A', 'B', 'C'];
const button2 = ['D', 'E', 'F'];
const button3 = ['G', 'H', 'I'];
const button4 = ['J', 'K', 'L'];
const button5 = ['M', 'N', 'O'];
const button6 = ['P', 'Q', 'R', 'S'];
const button7 = ['T', 'U', 'V'];
const button8 = ['W', 'X', 'Y', 'Z'];

for(let i = 0; i < phoneNumber.length; i++){
    if(button1.includes(phoneNumber[i])){
        phoneNumberNumeric += '2';
    } else if(button2.includes(phoneNumber[i])){
        phoneNumberNumeric += '3';
    } else if(button3.includes(phoneNumber[i])){
        phoneNumberNumeric += '4';
    } else if(button4.includes(phoneNumber[i])){
        phoneNumberNumeric += '5';
    } else if(button5.includes(phoneNumber[i])){
        phoneNumberNumeric += '6';
    } else if(button6.includes(phoneNumber[i])){
        phoneNumberNumeric += '7';
    } else if(button7.includes(phoneNumber[i])){
        phoneNumberNumeric += '8';
    } else if(button8.includes(phoneNumber[i])){
        phoneNumberNumeric += '9';
    } else {
        phoneNumberNumeric += phoneNumber[i];
    }
};

console.log(phoneNumberNumeric);

