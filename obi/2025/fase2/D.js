function bestForDecisive(objects, type) {
    let min = null;
    let index = null;

    for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];
        if (obj.type !== type) continue;
        if (!min) {
            min = obj;
            index = i;
            continue;
        }
        if (obj.price >= min.price) continue;

        min = obj;
        index = i;
    }

    return [index, min];
}

function bestForIndecisive(objects) {
    let min = null;
    let index = null;

    for (let i = 0; i < objects.length; i++) {
        const obj = objects[i];
        if (!min) {
            min = obj;
            index = i;
            continue;
        }

        if (obj.price > min.price) continue;
        if (obj.price < min.price) {
            min = obj;
            index = i;
            continue;
        }

        if (obj.price === min.price && obj.type < min.type) {
            min = obj;
            index = i;
            continue;
        }
    }

    return [index, min];
}

// Main Function
export default function craftFair(types, prices, clients) {
    const objects = [];
    types.forEach((type, i) => {
        const obj = { type, price: prices[i] };
        objects.push(obj);
    });

    let total = 0;
    clients.forEach(c => {
        const getBest = c === 0 ? bestForIndecisive : bestForDecisive;
        const [index, best] = getBest(objects, c);
        if (!best) return;

        total += best.price;
        objects.splice(index, 1);
    });
    return total;
}
