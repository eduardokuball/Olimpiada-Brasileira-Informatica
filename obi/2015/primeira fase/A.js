const [w, x, y, z] = prompt()
    .split(" ")
    .map((e) => {
        return parseInt(e);
    });

const result = (w === z) ? "F" : "V";

console.log(result);
