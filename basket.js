class Basket {
    constructor(item) {
        this.item = [];
    }
    add(item){
        this.item.push(item);
        return item;
    } 
}

module.exports = Basket