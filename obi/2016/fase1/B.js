export default function isCodeBalanced(code = []) {


    let openKeys = 0;
    let closeKeys = 0;
    let first = false;

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '{') {
            openKeys++;
            if (!first) first = "{";
        }

        if (code[i] === '}') {
            closeKeys++;
            if (!first) first = "}";
        }
    }

    if (openKeys === 0 && closeKeys === 0) return 'S';
    if (openKeys === closeKeys && first === "{") return 'S';

    return 'N';
}