const [aX, aY, bX, bY, x, y] = prompt().split(' ', 6).map(e => parseInt(e));

// 5 3 1 2 5 2

// Somas possíves:
    // Largura: [
        // 5 + 1,
        // 3 + 1 (se rotacionar o lençol 1)
        // 5 + 2 (se rotacionar o lençol 2)
        // 3 + 2 (se rotacionar os 2 lençois)
    // ]
    // Altura: 