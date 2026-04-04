export default function getMinimumPathSize(filePaths = []) {

    const dictionary = { "": 0 };
    const folderSizes = [0];
    const filesInSubfolders = Array(100000).fill(0);
    const adjacency = Array.from({ length: 100000 }, () => []);

    function findTranslation(word) {
        if (word in dictionary) {
            return dictionary[word];
        } else {
            folderSizes.push(word.length + 1);
            const position = Object.keys(dictionary).length;
            dictionary[word] = position;
            return position;
        }
    }

    function splitPath(path) {
        let start = 0;
        const result = [0];

        for (let i = 0; i < path.length; i++) {
            if (path[i] === '/') {
                const folder = path.substring(start, i);
                const folderIndex = findTranslation(folder);
                result.push(folderIndex);
                start = i + 1;
            }
        }

        return result;
    }

    function countFilesRecursively(index) {
        for (const neighbor of adjacency[index]) {
            if (visited[neighbor]) continue;
            countFilesRecursively(neighbor);
            visited[neighbor] = true;
            filesInSubfolders[index] += filesInSubfolders[neighbor];
        }
    }

    function searchBestSolution(index, currentSolution) {
        for (const neighbor of adjacency[index]) {
            if (visited[neighbor]) continue;

            const newSolution =
                currentSolution
                - (folderSizes[neighbor] * filesInSubfolders[neighbor])
                + (3 * (filePaths.length - filesInSubfolders[neighbor]));

            bestSolution = Math.min(bestSolution, newSolution);

            searchBestSolution(neighbor, newSolution);
            visited[neighbor] = true;
        }
    }

    let initialSize = 0;

    for (const filePath of filePaths) {
        initialSize += filePath.length;

        const pathIndices = splitPath(filePath);
        filesInSubfolders[pathIndices[pathIndices.length - 1]]++;

        for (let j = 0; j < pathIndices.length - 1; j++) {
            const u = pathIndices[j];
            const v = pathIndices[j + 1];
            adjacency[u].push(v);
        }
    }

    let visited = Array(100000).fill(false);
    countFilesRecursively(0);

    visited = Array(100000).fill(false);
    let bestSolution = initialSize;

    searchBestSolution(0, initialSize);

    return bestSolution;
}