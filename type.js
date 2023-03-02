let flag =  6
let flag2 = '6'
//flag = flag % 4
//flag **= 2 // flag = flag ** 2
//flag += 5    //flag = flag+5 
//console.log(typeof flag)
//flag = Number(flag)
//flag = flag/'Thirteen'   // '65'/'13'
//typecasting to a String
//flag = String(flag)
//flag=flag.toString()
//flag = flag + ' number' // concatenating to a string will always give a string
//flag = Boolean(flag)  //true
//console.log(flag++)  // 6                    //Post Increment: flag = flag+1
//console.log(flag) // 7
//console.log(++flag)  // 8                    //Pre Increment: flag = flag+1
//console.log(flag)
//console.log(typeof flag)

//console.log(!(flag <= flag2 || flag2 > 5))        ///=== strict comparison: value as well as data type


if(flag > 10){
    console.log('Value is greater than 10')
    console.log('You now have more than 10')
}
else{
    console.log('Value less than 10')
}    
let age = 70
let isRetired = age > 60 ? true : false
console.log('Retired: '+isRetired)

switch(age){
    case 60:
        console.log('age is: '+age)
        break;
    case 70:
        console.log('age is: '+age) 
        break;   
    case 80:
        console.log('age is: '+age)  
        break;
    default:
        console.log('No Match')       
}

//1. Initialization
//2. Condition
//3. Increment

//While loop: When no of iterations is not known
let i = 1 //initialization
console.log("=======Table of 5=========")
while( true ){  // Condition
   console.log('5 * '+i +' = '+5*i) 
   if(i > 10){
    break;
   }
   i++;  // Increment
}

//for loop: when no of iterations are known
console.log("=======FOR LOOP=========")
for(let j = 1; j<=10; j++){
       
    if(j == 5){
        continue;   // skips the current iteration
    }
    console.log(j)
    //console.log('6 * '+j +' = '+6*j)
}

// do while
console.log("================")
let m = 1
do{
    console.log(m*3)
    m++;
} while(m<10)