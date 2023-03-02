let studName        //variable declaration
studName="Martin"  //variable definition
let studAge = 28
console.log(`Hello ${studName}`)
console.log(studAge/0)

console.log('studAge type:'+typeof(studAge))

const SCHOOL_NAME = 'ABC';
console.log(studName)
if(studAge){
    //let message = 'Student is over age'   //let is having a block scope
    var message = 'Student is over age'
}
console.log(message)

let grade = 'A'    // let won't allow redeclaration
grade = 'A+'
console.log(grade)



// Any non empty string is equivalent to true


