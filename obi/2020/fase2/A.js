export default function countSlips(heights, tunnels, startRoom) {

    function createRooms(heights = []) {
        return heights.map((height, i) => ({
            id: i + 1,
            height
        }));
    }

    const findRoom = (rooms = [], roomId) =>
        rooms.find(({ id }) => id === roomId) || null;

    function createGraph(rooms = [], tunnels = []) {
        const graph = [];

        for (const { start, end } of tunnels) {
            const startRoom = findRoom(rooms, start);
            const endRoom = findRoom(rooms, end);

            if (startRoom.height > endRoom.height) {
                graph.push([start, end]);
            }

            if (endRoom.height > startRoom.height) {
                graph.push([end, start]);
            }
        }

        return graph;
    }

    const rooms = createRooms(heights);
    const graph = createGraph(rooms, tunnels);

    let currentRoom = startRoom;
    let slips = 0;

    function nextRoom(room) {
        for (const [start, end] of graph) {
            if (start === room) {
                slips++;
                currentRoom = end;
                return true;
            }
        }
        return false;
    }

    while (true) {
        const canSlip = nextRoom(currentRoom);
        if (!canSlip) break;
    }

    return slips;
}