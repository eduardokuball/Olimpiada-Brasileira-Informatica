export default function macawsInCages(cages, macaws){
    return cages >= (macaws * 4 + (macaws - 4)) ? 'S' : 'N';
}
