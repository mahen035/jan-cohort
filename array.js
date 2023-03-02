let names = []
names[0] = 'John'
names[1] = 'Pete'
names[2] = 'Karl'

//for(let i = 0 ; i< names.length; i++){
   // console.log(names[i])
//}
names[3] = 'Sara'

let arr = names

arr.push('Kevin')

let kArr = names.filter(getKNames)

function getKNames(val){
    return val.startsWith('K')
}

let fullNames = names.map(addLastName)

function addLastName(val){
    if(val.startsWith('K'))
       val+=' Jordan'
       return val
}

let allNames = names.reduce(addAll, '')

function addAll(allFields, val){
    return allFields + val
}

console.log('===========All Names concatenated===========')
console.log(allNames)

for(value of kArr){
    console.log(value)
}

console.log('============Full name Array==========')

for(value of fullNames){
    console.log(value)
}

// let fruits = ['Apple', 'Orange', 'Mango']
// console.log('Before push')
// for(value of names){
//     console.log(value)
// }
// names.push(fruits)
// console.log('After push')
// for(value of names){
//     console.log(value)
// }


