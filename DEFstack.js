class stack{
    constractor(){
        this.item = [];
        this.top = 0;
    }
    push(element){
        this.item[this.top] = element;
        this.top = this.top + 1;
    }
    pop(){
        if(this.isempty() === false){
            this.top = this.top-1;
            return this.item.pop();
        }else{
            return "underflow";
        }
    }
    isempty(){
        return this.item[this.top-1];       
    }
    printstack(){
        var top = this.top-1;
        while(top>=0){
            console.log(this.item[top]);
            top--;
        }
    }
}
s1 = new stack;
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);
s1.push(50);
console.log("push stack element:");
s1.printstack();
s1.pop();
s1.pop();
console.log("pop 2 element:");
s1.printstack();
console.log("peek element");
console.log(s1.peek());
console.log(s1.isempty());