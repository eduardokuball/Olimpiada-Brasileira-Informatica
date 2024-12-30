function processRequirements(friends) {
    const obj = [];
    const friendshipsMade = [];

    friends.forEach(friend => {
        const requirement = Number(prompt());
        if (requirement > 0) {
            const requirements = prompt()
            .split(' ')      
            obj.push({
                name: friend,
                requirements: requirements
            });
        } else {
            friendshipsMade.push(friend);
        }
    });

    return [obj, friendshipsMade] ;
}

function makeFriendships(quantity, obj, friendshipsMade) {
    for (let j = 0; j < quantity; j++) {
        obj.forEach((o, index) => {
            const allRequirementsMet = o.requirements.every(r => friendshipsMade.includes(r));

            if (allRequirementsMet) {
                friendshipsMade.push(o.name);
                obj.splice(index, 1);
            }
        });
    }

    return friendshipsMade;
}

function displayResult(quantity, friendshipsMade) {
    if (friendshipsMade.length < quantity) {
        console.log('impossivel');
    } else {
        console.log(friendshipsMade.join(' '));
    }
}

const quantity = Number(prompt());
const friends = prompt()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));  ;

const [obj, friendshipsMade] = processRequirements(friends);
const finalFriendships = makeFriendships(quantity, obj, friendshipsMade);

displayResult(quantity, finalFriendships);
