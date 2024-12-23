let [downloaded,available] = prompt('apps baixados e disponíveis')
.split(' ')
.map(Number);

let downloadeds = [];
let availables = [];
let upgrades = [];

for(let i = 0; i < downloaded; i++){
    let [app,version] = prompt('digite o app baixado e a versão')
    .split(' ');
    downloadeds.push({
        app: String(app),
        version: Number(version)
    });
};

for(let i = 0; i < available; i++){
    let [app,version] = prompt('digite o app disponível e a versão')
    .split(' ');
    availables.push({
        app: String(app),
        version: Number(version)
    });
};

downloadeds.forEach((downloaded) => {
    availables.forEach((available) => {
        if(downloaded.app === available.app && downloaded.version < available.version){
            upgrades.push({
                app: String(available.app),
                version: Number(available.version)
        });
        };
    })
});

upgrades.forEach((upgrade) => {
    console.log(`${upgrade.app} ${upgrade.version}`);
});