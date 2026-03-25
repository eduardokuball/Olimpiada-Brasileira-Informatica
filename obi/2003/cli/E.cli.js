import { input, output } from '../../../utils/io.js';
import erdosNumbers from '../E.js';

const articles = Number(input());

const articlesAuthors = [];

for (let i = 0; i < articles; i++) {
    const authors = input()
        .split(',')
        .map(e => e.trim())
        .map(e => e.at(-1) === '.' ? e.slice(0, -1) : e);

    articlesAuthors.push(authors);
}

const result = erdosNumbers(articlesAuthors);


result.forEach(line => output(line));