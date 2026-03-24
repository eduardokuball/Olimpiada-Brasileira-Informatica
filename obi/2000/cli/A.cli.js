import { input, output } from '../../../utils/io.js'; 
import minimumSpanningTree from '../A.js'; 

const [tabas, branchesQuantity] = input().split(' ').map(Number); 

const edges = []; 
for (let i = 0; i < branchesQuantity; i++) { 

    let [tabaA, tabaB, cost] = input().split(' ').map(Number); 
    edges.push({ tabaA, tabaB, cost }); 
}

const result = minimumSpanningTree(edges); 

result.forEach(([a, b]) => { output(a, b); }); 
