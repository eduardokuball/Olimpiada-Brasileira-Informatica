export default function findUpgrades(downloadeds, availables) {

    const availableMap = new Map();

    for (const { app, version } of availables) {
        if (!availableMap.has(app) || availableMap.get(app) < version) {
            availableMap.set(app, version);
        }
    }

    const upgrades = [];

    for (const { app, version } of downloadeds) {
        if (availableMap.has(app) && version < availableMap.get(app)) {
            upgrades.push({
                app,
                version: availableMap.get(app)
            });
        }
    }
    return upgrades;
}