const cards = prompt()
    .split(' ')
    .map(e => parseInt(e));

Array.prototype.count = function(item){
    let count = 0;
    for(let i = 0; i < this.length; i++){
        if(this[i] == item)
            count++;
    }
    return count;
}
Array.prototype.isSequence = function (){
    this.sort((a,b) => a - b);
    for(let i = 0; i < this.length - 1; i++){
        if(this[i] != this[i + 1] - 1)
            return false;
    }
    return this[0] + 200;
};

Array.prototype.isQuadra = function(){
    this.sort((a,b) => a - b);
    if(this.count(this[0]) != 4) return false;
    return this[0] + 180;
};

Array.prototype.isTrioAndCouple = function(){
    this.sort((a,b) => a - b);
    if(this.count(this[0]) == 3 && this.count(this[3]) == 2) return this[0] + 160;
    if(this.count(this[3]) == 3 && this.count(this[0]) == 2) return this[3] + 160;
    return false;
};

Array.prototype.isTrio = function(){
    this.sort((a,b) => a - b);
    if(this.count(this[2] == 3)) return this[2] + 140;
    return false;
};

Array.prototype.isTwoPairs = function() {
    this.sort((a, b) => a - b);
    let pair1 = null, pair2 = null, single = null;

    for (let i = 0; i < this.length; i++) {
        if (this.count(this[i]) === 2) {
            if (pair1 === null) {
                pair1 = this[i]; 
            } else if (pair1 !== this[i] && pair2 === null) {
                pair2 = this[i];
            }
        } else if (this.count(this[i]) === 1) {
            single = this[i];
        }
    }

    if (pair1 !== null && pair2 !== null && single !== null) {
        const [x, y] = pair1 > pair2 ? [pair1, pair2] : [pair2, pair1];
        return 3 * x + 2 * y + 20; 
    }

    return false; 
};


Array.prototype.isCouple = function() {
    this.sort((a, b) => a - b); 
    let pair = null;

    for (let i = 0; i < this.length; i++) {
        if (this.count(this[i]) === 2) {
            if (pair === null) {
                pair = this[i]; 
            } else if (pair !== this[i]) {
                return false;
            }
        } else if (this.count(this[i]) > 2) {
            return false; 
        }
    }
    return pair || false; 
};

function response(cards){
    if(cards.isSequence()) return cards.isSequence();
    if(cards.isQuadra()) return cards.isQuadra();
    if(cards.isTrioAndCouple()) return cards.isTrioAndCouple();
    if(cards.isTrio()) return cards.isTrio();
    if(cards.isTwoPairs()) return cards.isTwoPairs();
    if(cards.isCouple()) return cards.isCouple();
    return 0;
};

console.log(response(cards));

