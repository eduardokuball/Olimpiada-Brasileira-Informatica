import { input, output } from '../../../../utils/io.js';
import findUpgrades from '../B.js';

const [downloadedCount, availableCount] = input()
    .split(' ')
    .map(Number);

const downloadeds = [];

for (let i = 0; i < downloadedCount; i++) {
    const [app, version] = input().split(' ');
    downloadeds.push({
        app,
        version: Number(version)
    });
}

const availables = [];

for (let i = 0; i < availableCount; i++) {
    const [app, version] = input().split(' ');
    availables.push({
        app,
        version: Number(version)
    });
}

const upgrades = findUpgrades(downloadeds, availables);

for (const { app, version } of upgrades) {
    output(`${app} ${version}`);
}