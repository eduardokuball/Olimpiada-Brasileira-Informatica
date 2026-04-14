// Main Function
export default function maximin(min, max, numbers) {
    let maxScore = 0;

    for (let i = min; i <= max; i++) {
        let min = Infinity;
        
        numbers.forEach(n => {
            const score = Math.abs(i - n);
            if (score < min) min = score;
        });

        if (min > maxScore) maxScore = min;
    }

    return maxScore;
}
