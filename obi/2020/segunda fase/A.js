function createRooms(heights=[]) {
    const rooms = [];

    heights.forEach((height, i) => rooms.push({ id: i+1, height }));

    return rooms;
}

const findRoom = (rooms=[], roomId) => rooms
    .find(({id}) => id === roomId) || null;

function createGraph(rooms=[], tunnels=[]) {
    const graph = [];

    tunnels.forEach(({ start, end }) => {
        const startRoom = findRoom(rooms, start);
        const endRoom = findRoom(rooms, end);

        if (startRoom.height > endRoom.height)
            graph.push(`${start} : ${end}`);

        if (endRoom.height > startRoom.height)
            graph.push(`${end} : ${start}`);
    });

    return graph;
}

const lineInput = prompt()
    .split(' ', 3)
    .map(e => parseInt(e));

const [ roomsQuant, tunnelsQuant ] = lineInput;
let [,,currentRoom] = lineInput;

const roomsHeights = prompt()
    .split(' ', roomsQuant)
    .map(e => parseInt(e));

const tunnels = [];

for (let i = 0; i < tunnelsQuant; i++) {
    const [start, end] = prompt()
        .split(' ', 2)
        .map(e => parseInt(e))
    
    tunnels.push({ start, end });
}

const rooms = createRooms(roomsHeights);
const graph = createGraph(rooms, tunnels);



function nextRoom(room) {
    for (let tunnel of graph) {
        const [start, end] = tunnel.split(' : ', 2).map(e => parseInt(e));

        if (start === room) {
            slips++;
            currentRoom = end;
            return true;
        }
    }

    return false;
}

let slips = 0;

while (true) {
    const canISlip = nextRoom(currentRoom);

    if (!canISlip) break;
}

console.log(slips);