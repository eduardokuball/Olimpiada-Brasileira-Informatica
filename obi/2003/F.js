export default function rankPlayers(playersData) {

    function calculatePontuation(results) {
        const sorted = [...results].sort((a, b) => a - b);

        sorted.shift();
        sorted.pop();

        return sorted.reduce((a, b) => a + b, 0);
    }

    const report = playersData.map(({ player, results }) => ({
        player,
        pontuation: calculatePontuation(results)
    }));

    report.sort((a, b) => {
        if (b.pontuation !== a.pontuation) {
            return b.pontuation - a.pontuation; // maior primeiro
        }

        return a.player.localeCompare(b.player); // alfabética
    });

    return report.map((r, index) => `${index + 1} ${r.player} ${r.pontuation}`);
}