class queue{
    constroctor(){
        this.item = [];
        this.start = 0;
        this.end = 0;
    }
    start(item){
        this.item[this.end] = item;
        this.end++;
        return item + 'inserted';
    }
    end(){
        const item = this.item[this.start];
        delete this.item[this.start];
        this.start++;
        return item + 'deleted';
    }
    isEmpty(){
        return this.start === this.end;
    }
    peek(){
        return this.item[this.start];
    }
    printQueue(){
        return this.item;
    }
}

Q1 = new queue();
console.log(q1.enqueue(10));
console.log(q1.enqueue(20));
console.log(q1.enqueue(30));
console.log(q1.enqueue(40));
console.log(q1.enqueue(50));
console.log("After pushing 5 elements");
console.log(q1.printQueue());
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log("After popping 2 elements");
console.log(q1.printQueue());
console.log(q1.enqueue(60));
console.log(q1.printQueue());
console.log("Front element");
console.log(q1.peek());
console.log(q1.isEmpty());
