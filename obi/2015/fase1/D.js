export default function calculateCount(n, m) {

    let count = 0;

    if (m >= n) {
        for (let i = 0; i < n; i++) {
            count += i;
        }
    } else {
        const floor = n - 2 * m;

        if (floor > 0) {
            const k = m + 1 - floor;

            for (let i = 0; i <= k; i++) {
                count += i;
            }
        } else {
            let initial = 2 * (m - Math.floor(n / 2) + 1);

            for (let i = 1; i < n - m; i++) {
                count += initial;
                initial += 1;
            }

            for (let i = n - m; i <= m; i++) {
                count += n - i - 1;
            }
        }
    }

    return count;
}