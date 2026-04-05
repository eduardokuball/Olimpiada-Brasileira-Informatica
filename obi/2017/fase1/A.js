export default function calculateMoves(positions, flyingSaucer, airplane) {
    if (flyingSaucer > airplane) return flyingSaucer - airplane;
    if (flyingSaucer === airplane) return 0;
    return (positions - airplane) + flyingSaucer;
}