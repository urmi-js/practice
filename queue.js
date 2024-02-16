class queue{
    constructor(){
        this.item = [];
    }
    enqueue(element){
        this.item.push(element);
    }
    dequeue(){
        if (this.item.length === 0) {
            return this.item.shift();
        } else {
            return "Underflow";
        }
    }
    isEmpty(){
        return (this.item.length === 0);
    }
    printqueue(){
        let str = "";
        for(let i=0; i < this.item.length; i++) {
           str += this.item[i] +" ";
        }
        return str;
     }
}
const q = new queue();
console.log("Is empty: "+q.isEmpty());
q.enqueue(10);                       
q.enqueue(20);                       
