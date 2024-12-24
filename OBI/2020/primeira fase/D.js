const [friends, musics, currentMusic] = prompt('amigos,músicas,música atual')
.split(' ')
.map(Number);
let switchs = 0;
const hatedMusics = [];
const obj = [];

for (let i = 0; i < friends; i++) {
    const [lovedMusic, hatedMusic] = prompt('musica amada,musica odiada')
    .split(' ')
    .map(Number);
    hatedMusics.push(hatedMusic);
    obj.push({
        lovedMusic: lovedMusic,
        hatedMusic: hatedMusic
    });
}

for (let j = 0; j < friends; j++) {
    obj.forEach((f) => {
        if (f.hatedMusic == currentMusic) {
            currentMusic = f.lovedMusic;
            switchs++;
        }
    });
}

if (!hatedMusics.includes(currentMusic)) {
    console.log(switchs);
} else {
    console.log(-1);
}