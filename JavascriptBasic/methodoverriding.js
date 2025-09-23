class Bank
{
    roi()
    {
        return 0;
    }
    
}
class AXIS extends Bank
{
   
    roi()
    {
        return 10.5;
    }
     
}
class SBI extends Bank
{

    roi()
    {
        return 12.5;
    }
    
}
sb=new SBI();
console.log(sb.roi());

ax=new AXIS();
console.log(ax.roi());