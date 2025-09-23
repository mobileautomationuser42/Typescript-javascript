class Student
{

    constructor()
    {

        let name ,marks;
    }
    getname()
    {
        return this.name;
    }
    setname(name)
    {
    this.name=name;
    }
    getmarks()
    {
        return this.marks;
    }
    setmarks(marks)
    {
        this.marks=marks;
    }
}

let stu=new Student();
stu.setname("John");
stu.setmarks(90);

console.log(stu.getname(),stu.getmarks());
