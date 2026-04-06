export default function isMessageValid(alienAlphabet, message) {
    const allowed = new Set(alienAlphabet);

    for (let i = 0; i < message.length; i++) {
        if (!allowed.has(message[i])) {
            return "N";
        }
    }

    return "S";
}