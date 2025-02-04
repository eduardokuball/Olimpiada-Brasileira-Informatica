const getAuthorSignature = ({ name, surname }) => `${name}. ${surname}`;

const articles = parseInt(prompt());

// Consideramos Erdos com Nº de Erdos = 0 para ter um pontapé inicial.
const authorsErdosNum = { 'P. Erdos': 0 };

for (let i = 0; i < articles; i++) {
    const authors = prompt()
        .split(',')
        .map(e => e.trim())
        .map(e => e.at(-1) === '.' ? e.slice(0, -1) : e);

    authors.forEach(author => {
        if (authorsErdosNum.hasOwnProperty(author)) return;

        const erdosNumbers = [];

        authors.forEach(other_author => {
            if (!authorsErdosNum[other_author] && authorsErdosNum[other_author] !== 0) return;
            if (authorsErdosNum[other_author] === 'infinito') return;
            if (other_author === author) return;

            const authorErdos = authorsErdosNum[other_author];
            erdosNumbers.push(authorErdos);            
        });

        authorsErdosNum[author] = erdosNumbers.length > 0
            ? Math.min(...erdosNumbers) + 1
            : 'infinito';
    });
}

// [{ name: 'P', surname: 'Erdos' }, ...]
const authorsNames = Object.keys(authorsErdosNum)
    .map(author => {
        const [name, surname] = author
            .split('.')
            .map(e => e.trim());

        return { name, surname };
    })
    .filter(author => getAuthorSignature(author) !== 'P. Erdos');

authorsNames
    .sort((a, b) => {
        // Ordena pelo sobrenome
        const surnames = [a.surname, b.surname].toSorted();
        return surnames[0] === a.surname ? -1 : 1;
    })
    .sort((a, b) => {
        // Caso hajam sobrenomes iguais, ordena pelo nome
        if (a.surname !== b.surname) return 0;

        const names = [a.name, b.name].toSorted();
        return names[0] === a.name ? -1 : 1;
    });

authorsNames.forEach(author => {
    const authorSignature = getAuthorSignature(author);
    const authorErdos = authorsErdosNum[authorSignature];

    console.log(`${authorSignature}: ${authorErdos}`);
});
