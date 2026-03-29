export default function macawsInCages(cages, macaws){

    if(cages >= (macaws * 4 + ( macaws - 4) )){
        return "S"
    }
    
    return "N"

}