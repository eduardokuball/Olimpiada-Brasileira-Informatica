function moves(positions,flyingSaucer, airplane){
    if(flyingSaucer > airplane) return flyingSaucer - airplane;
    if(flyingSaucer == airplane) return 0;
    return (positions - airplane) + flyingSaucer;
};

const positions = parseInt(prompt());
const flyingSaucer = parseInt(prompt());
const airplane = parseInt(prompt());

console.log(moves(positions, flyingSaucer, airplane));