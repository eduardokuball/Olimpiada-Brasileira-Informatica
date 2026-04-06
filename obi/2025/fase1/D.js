// Main Function
export default function barChart(votes = []) {
    const width = votes.length;
    const height = Math.max(...votes);

    const chart = Array.from({ length: height }, () =>
        Array.from({ length: width }, () => 0)
    );
    
    votes.forEach((vote, column) => {
        for (let i = chart.length-1; i >= 0; i--) {
            const layer = chart.length - i;
            if (vote < layer) break;
            chart[i][column] = 1;
        }
    });

    return chart;
}

// Exemplo 1

// Entrada:
// 4
// 4 2 5 3
// Saída:
// 0 0 1 0
// 1 0 1 0
// 1 0 1 1
// 1 1 1 1
// 1 1 1 1

// Exemplo 2

// Entrada:
// 5
// 1 2 1 2 1
// Saída:
// 0 1 0 1 0
// 1 1 1 1 1

// Exemplo 3

// Entrada:
// 8
// 1 2 3 4 5 6 7 8
// Saída:
// 0 0 0 0 0 0 0 1
// 0 0 0 0 0 0 1 1
// 0 0 0 0 0 1 1 1
// 0 0 0 0 1 1 1 1
// 0 0 0 1 1 1 1 1
// 0 0 1 1 1 1 1 1
// 0 1 1 1 1 1 1 1
// 1 1 1 1 1 1 1 1

