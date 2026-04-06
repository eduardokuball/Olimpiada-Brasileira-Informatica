export default function getCutOffGrade(grades, minimumApproved) {
    const sortedGrades = [...grades].sort((a, b) => b - a);
    const selected = sortedGrades.slice(0, minimumApproved);
    return selected[selected.length - 1];
}