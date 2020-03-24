class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(i) {
        return this.data[i];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        let item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    deleteAtIndex(i) {
        let item = this.data[i];
        delete this.data[i];
        for (i; i<this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return item;
    }
}