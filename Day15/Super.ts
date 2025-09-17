// super() - used to invoke immediate parent class constructor
// super - used to invoke immediate parent class method
//super - cannot be used to invoke the parent class proprty. (In Java, it is possible)
class Parent {
    num: number = 10;

    constructor() {
        console.log("This is Parent class constructor..");
    }

    display() {
        console.log("This is display() method from Parent class...");
    }
}

class Child extends Parent {
    num: number = 20; // overridden

    constructor() {
        super(); // this will call parent class constructor (must be called)
        console.log("This is child class constructor...");
    }

    show() {
        console.log("This is show() method from the child class...");
    }

    // overridden method
    display() {
        console.log("This is display() method from child class...");
    }
}
let c1=new Child();
c1.show();   //child class
c1.display();   //child class