const [tabs, foldersQuantity] = prompt()
    .split(' ', 2)
    .map(e => parseInt(e));

const folders = [];

for (let i = 0; i < foldersQuantity; i++) {
    const folder = parseInt(prompt());
    folders.push(folder);
}

let perfectFolders = true;

// Uma gambiarra fudidassa pra ordenar o array em loop
function getLoopSortedArray(arr = []) {
    const map = {};

    arr.forEach(e => {
        const key = String(e);

        if (key in map) return ++map[key];
        map[key] = 1;
    });

    const sorted = [];

    while (true) {
        for (let key in map) {
            if (map[key] <= 0) continue;
    
            sorted.push(parseInt(key));
            map[key]--;

            if (sorted.length === arr.length) break;
        }

        if (sorted.length === arr.length) break;
    }

    return sorted;
}

getLoopSortedArray(folders).forEach((folderTab, i, arr) => {
    // Esse for vai catar alguma imperfeição nas pastas, caso não haja ele vai retornando
    // Quando ele encontra uma imperfeição ele seta false
    if (i === folders.length - 1) return;
    
    const nextFolder = arr[i+1];

    if (folderTab === tabs && nextFolder === 1) return;
    if (folderTab < tabs && nextFolder === folderTab + 1) return;

    perfectFolders = false;
});

console.log(perfectFolders ? 'S' : 'N');
