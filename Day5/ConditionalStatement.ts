
console.log("********************** While Loop *******************")
let count: number = 0;

while (count < 5) {
  if (count % 2 === 0) {
    console.log(`${count} is even`);
  } else {
    console.log(`${count} is odd`);
  }
  count++;
}
 console.log("********************** Do...While Loop *******************")
 let i: number = 0;
do {
  if (i === 3) {
    console.log('Reached 3, breaking the loop.');
    break; // Shows use of conditional with loop control
  }
  console.log(i);
  i++;
} while (i < 5);
 console.log("********************** For Loop *******************")
 for (let j = 1; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(`${j} is even`);
  }
}

 console.log("********************** If-Else Inside Loops *******************")
 const numbers: number[] = [12, 7, 20, 15];

for (let n of numbers) {
  if (n >= 15) {
    console.log(`${n} is large`);
  } else {
    console.log(`${n} is small`);
  }
}
 console.log("********************** If-Else Inside Loops example *******************")
/*
let mark:number=50;

if(mark>=90 && mark<=100)
{
  console.log('Grade A')
}
else if(mark>=75 && mark<=90)
{
  console.log('Grade B')
}
else if(mark>=60 && mark<=75)
{
  console.log('Grade D')
}
else
{
  console.log('Grade D')
}*/
//Example 4: Browser selection
/*
let browser:string = 'chrome';
if(browser ==="chrome")
{
console.log ("Browser is chrome");
}

else if(browser ==="firefox")
{
console.log ("Browser is firefox");
}
else if(browser ==="safari")
  {
console.log ("Browser is safari")
  }

else
{
console. log("Other browser");
}*/

/*
1
switch (expression)

case value 1: statements;
break;

case value 2: statements;
break;

case value 3: statements;
break;
default : statements;
}
*/
/*
let day: number = 7;

switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid week");
}*/
// Example 6: The switch statement can also include an expression

let x: number = 20, y: number = 15;

switch(x - y) //expression
{
    case 0: 
        console.log("Result Zero");
        break;
    case 5: 
        console.log("Result is Five");
        break;
    case 10: 
        console.log("Result is Ten");
        break;
        default:
          console.log("Result is something else")
}

