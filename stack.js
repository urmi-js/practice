class stack{
    constructor(){
        this.item = [];
    }
    push(element){
        this.item.push(element);
    }
    pop(){
        if (this.item.length === 0){
            return "underflow";
        }
        return this.item.pop();
    }
    peek(){
        return this.item[this.item.length - 1];
    }
    isempty(){
        return this.item.length === 0;
    }
    printstack(){
        let str=  "";
        for (let i = 0; i < this.item.length; i++){
            str +=this.item[i] + "";
        }
        return str;
    }
}

let s = new stack;

s.push(5);
s.push(8);
s.push(9);
console.log(s.printstack()); // prints: 985
console.log(s.peek())       // returns: 9
console.log(s.isempty())     // returns: false
console.log(s.pop())         // returns: 9
