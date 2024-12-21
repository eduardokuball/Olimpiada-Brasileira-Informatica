let lineInput = prompt('Linha 1')
  .split(' ', 2)
  .map(e => parseInt(e));

let [numCandies, familyMembers] = lineInput;

function getMaxCandies(numCandies, familyMembers, candies) {
  let candyCount = Array(familyMembers + 1).fill(0); 
  let maxCandies = 0;

  let left = 0;
  let brands = 0;

  for (let right = 0; right < numCandies; right++) {
      if (candyCount[candies[right]] === 0) brands++;
    
      candyCount[candies[right]]++;

      while (brands > familyMembers) {
          candyCount[candies[left]]--;
        
          if (candyCount[candies[left]] === 0) brands--;
        
          left++;
      }

      if (brands === familyMembers && isUniform(candyCount, familyMembers))
          maxCandies = Math.max(maxCandies, right - left + 1);
  }

  return maxCandies;
}

function isUniform(candyCount, familyMembers) {
  let counts = candyCount
    .slice(1, familyMembers+1)
    .filter(count => count > 0);

  if (counts.length !== familyMembers) return false;

  for (let count of counts) {
      if (count !== counts[0]) return false;
  };

  return true;
}

let candies = prompt('Linha 2')
  .split(' ', numCandies)
  .map(e => parseInt(e));

console.log(getMaxCandies(numCandies, familyMembers, candies));