export class Node {
    constructor(value) {
        this.value = value;
        this.childs = [];
    }

    addChild(node) {
        if (!node instanceof Node)
            throw new Error('node precisa ser uma instância de Node!');
        this.childs.push(node);
    }
}

export class Tree extends Node {
    constructor(value) { super(value); }
    get root() { return this; }

    get leafs() {
        let leafsCounter = 0;
        const stack = [...this.childs];

        while (stack.length > 0) {
            const node = stack.pop();
            if (node.childs.length > 0) {
                stack.push(...node.childs);
                continue;
            }
            leafsCounter++;
        }

        return leafsCounter;
    }
}