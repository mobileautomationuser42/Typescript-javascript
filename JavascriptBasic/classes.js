class Student
{
    constructor(sid,name,grade)
    {
       this.sid=sid;
       this.sname=name;
       this.grade=grade;
    }


    // setDetails(sid,name,grade)
    // {
    //    this.sid=sid;
    //    this.sname=name;
    //    this.grade=grade;
    // }
   
    disply()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}
let stu=new Student(101,"John","A");
//stu.setDetails(101,"John","A");
stu.disply();
let stu1=new Student(101,"David","A");
stu.disply();
let stu2=new Student(102,"Smith","B");
stu.disply();
let stu3=new Student(103,"Mary","C");
stu.disply();