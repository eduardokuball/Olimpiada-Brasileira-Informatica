function getMobileById(mobiles, id) {
    return mobiles.find(mobile => mobile.id === id) || null;
}

export default function isBalanced(pairs) {
    const mobiles = [{ id: 0, subs: [] }];

    for (const [mobileId, parentId] of pairs) {
        mobiles.push({ id: mobileId, subs: [] });

        const parent = getMobileById(mobiles, parentId);
        parent.subs.push(mobileId);
    }

    mobiles.shift();

    const balanced = mobiles
        .map(m => {
            const childs = m.subs.map(id => getMobileById(mobiles, id));

            if (childs.length === 0) return true;

            const base = childs[0].subs.length;

            return childs.every(c => c.subs.length === base);
        })
        .every(Boolean);

    return balanced ? 'bem' : 'mal';
}