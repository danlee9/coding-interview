class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, val) {
        let hash = this._hash(key);
        if (!this.data[hash])
            this.data[hash] = [];
        this.data[hash].push([key, val]);
        return this.data;
    }

    get(key) {
        let hash = this._hash(key);
        if (!this.data[hash])
            return undefined;
        for (let pair of this.data[hash]) {
            if (pair[0] === key)
                return pair[1];
        }
        return undefined;
    }

    keys() {
        let keys = [];
        for (let hash of this.data) {
            if (hash)
                for (let pair of hash) {
                    keys.push(pair[0]);
                }
        }
        return keys;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
