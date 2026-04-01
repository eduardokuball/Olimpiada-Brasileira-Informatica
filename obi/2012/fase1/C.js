function removeRepetitions(presenceList = []) {
    const uniqueList = [...new Set(presenceList)];
    return uniqueList;
}

function countStudents(uniqueList = []) {
    return uniqueList.length;
}

export default function countUniqueStudents(presenceList = []) {
    const uniqueList = removeRepetitions(presenceList);
    return countStudents(uniqueList);
}