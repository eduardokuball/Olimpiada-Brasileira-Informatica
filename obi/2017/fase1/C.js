export default function countBootPairs(boots) {
    const sizes = new Set();
    const bootSet = new Set();

    for (const { size, foot } of boots) {
        sizes.add(size);
        bootSet.add(String(size) + foot.toUpperCase());
    }

    let pairs = 0;

    for (const size of sizes) {
        if (bootSet.has(size + 'D') && bootSet.has(size + 'E')) {
            pairs++;
        }
    }

    return pairs;
}