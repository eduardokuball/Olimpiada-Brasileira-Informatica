export default function splitTeamsByDislikes(requirements) {
    const canJoinTeam = (dislikes, team) => {
        return !dislikes.some(person => team.includes(person));
    };

    const teamA = [1];
    const teamB = [];

    for (const student of requirements) {
        if (student.id === 1) continue;

        if (canJoinTeam(student.requirement, teamA)) {
            teamA.push(student.id);
        } else if (canJoinTeam(student.requirement, teamB)) {
            teamB.push(student.id);
        }
    }
    return [teamA, teamB];
}