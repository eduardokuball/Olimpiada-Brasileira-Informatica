export default function isPerfectFolders(tabs, folders) {
    for (let i = 0; i < folders.length - 1; i++) {
        const current = folders[i];
        const next = folders[i + 1];

        if (current === next) continue;

        if (current < tabs && next === current + 1) continue;

        if (current === tabs && next === 1) continue;

        return 'N';
    }

    return 'S';
}