export default function calculate(expressao) {

    let resultado = 0;
    let numeroAtual = '';
    let operador = '+';

    for (let i = 0; i < expressao.length; i++) {
        const char = expressao[i];

        if (!isNaN(char)) {
            numeroAtual += char;
        }

        if (isNaN(char) || i === expressao.length - 1) {
            if (operador === '+') {
                resultado += parseInt(numeroAtual, 10);
            } else if (operador === '-') {
                resultado -= parseInt(numeroAtual, 10);
            }

            operador = char;
            numeroAtual = '';
        }
    }
    
        return resultado;
}

