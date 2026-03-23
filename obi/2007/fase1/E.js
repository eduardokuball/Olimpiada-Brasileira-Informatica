const getMobileById = (mobiles, id) => mobiles.find(mobile => mobile.id === id) || null;

const mobilesQuantity = parseInt(prompt());

// Lista de mobiles com ponteiros para os outos sub-mobiles
const mobiles = [{ id: 0, subs: [] }];

for (let i = 0; i < mobilesQuantity; i++) {
    const [mobileId, parentId] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e));

    // Adiciona o mobile na lista e cria o ponteiro do seu pai
    mobiles.push({ id: mobileId, subs: [] });
    getMobileById(mobiles, parentId).subs.push(mobileId);
}

// Remove a raiz, não precisamos dela.
mobiles.shift();

const balanced = mobiles.map(e => {
    const childs = e.subs.map(e => getMobileById(mobiles, e));

    if (childs.length === 0) return true;

    const baseSubchildsCount = childs[0].subs.length;

    return childs.every(e => e.subs.length === baseSubchildsCount);
}).every(e => e === true);

console.log(balanced ? 'bem' : 'mal');
