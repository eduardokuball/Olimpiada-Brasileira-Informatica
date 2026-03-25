export default function erdosNumbers(articlesAuthors) {

    const getAuthorSignature = ({ name, surname }) => `${name}. ${surname}`;

    const authorsErdosNum = { 'P. Erdos': 0 };

    articlesAuthors.forEach(authors => {

        authors.forEach(author => {
            if (authorsErdosNum.hasOwnProperty(author)) return;

            const erdosNumbers = [];

            authors.forEach(other_author => {
                if (!authorsErdosNum[other_author] && authorsErdosNum[other_author] !== 0) return;
                if (authorsErdosNum[other_author] === 'infinito') return;
                if (other_author === author) return;

                erdosNumbers.push(authorsErdosNum[other_author]);
            });

            authorsErdosNum[author] = erdosNumbers.length > 0
                ? Math.min(...erdosNumbers) + 1
                : 'infinito';
        });

    });

    const authorsNames = Object.keys(authorsErdosNum)
        .map(author => {
            const [name, surname] = author
                .split('.')
                .map(e => e.trim());

            return { name, surname };
        })
        .filter(author => getAuthorSignature(author) !== 'P. Erdos');

    authorsNames.sort((a, b) => {
        if (a.surname !== b.surname) {
            return a.surname.localeCompare(b.surname);
        }
        return a.name.localeCompare(b.name);
    });

    return authorsNames.map(author => {
        const signature = getAuthorSignature(author);
        const value = authorsErdosNum[signature];
        return `${signature}: ${value}`;
    });
}