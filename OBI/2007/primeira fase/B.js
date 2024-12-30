function collectApps(count) {
    const apps = [];
    for (let i = 0; i < count; i++) {
        const [app, version] = prompt().split(' ');
        apps.push({
            app: String(app),
            version: Number(version)
        });
    }
    return apps;
}

function findUpgrades(downloadeds, availables) {
    const upgrades = [];
    downloadeds.forEach((downloaded) => {
        availables.forEach((available) => {
            if (
                downloaded.app === available.app &&
                downloaded.version < available.version
            ) {
                upgrades.push({
                    app: String(available.app),
                    version: Number(available.version)
                });
            }
        });
    });
    return upgrades;
}

const [downloaded, available] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const downloadeds = collectApps(downloaded);
const availables = collectApps(available);

const upgrades = findUpgrades(downloadeds, availables);

upgrades.forEach((upgrade) => {
    console.log(`${upgrade.app} ${upgrade.version}`);
});
