

class Test
{
   static  a=10; //static variable
    b=20;          //non static variable

static m1()
{
console.log("this is m1 static method... ")
}
m2()
{
    console.log("this is m2 Non-static method...")

}
}
//1) we can directly  access static variables and methods using class name
console.log(Test.a);//10
 Test.a=100;
 console.log(Test.a);//10
Test.m1();  //this is m1 static method... 
 //Test.m2();  //error,incorrect

 //2)we can access non static variable & methods using object
 let t= new Test();
 console.log(t.b);
 t.m2();
