export default function countMusicChanges(friends, selectedMusic) {

    const everyoneSatisfied = (friendsArr, music) =>
        friendsArr.every(({ hated }) => hated !== music);

    const infiniteCycle = () => {
        const hateds = friends.map(f => f.hated);
        return friends.every(({ beloved }) => hateds.includes(beloved));
    };

    let changes = 0;

    while (true) {
        if (infiniteCycle()) {
            return -1;
        }

        for (const friend of friends) {
            if (friend.hated === selectedMusic) {
                selectedMusic = friend.beloved;
                changes++;

                if (everyoneSatisfied(friends, selectedMusic)) {
                    return changes;
                }
            }
        }

        if (everyoneSatisfied(friends, selectedMusic)) {
            return changes;
        }
    }
}