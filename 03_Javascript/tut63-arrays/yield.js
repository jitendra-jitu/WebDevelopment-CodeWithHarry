
//
//// usercase-1
//////
// function* GeneratorFunction(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// } 
// let GeneratorObj=GeneratorFunction()
// console.log(GeneratorObj)
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())


//
/// usercase-2
//////

// function* GeneratorFunction(i){
//     while (true) {
//         yield i
//         i++
//     }
// } 

// let GeneratorObj=GeneratorFunction(0)
// console.log(GeneratorObj)
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())



//
//// usercase-3
//////
// function* GeneratorFunction(arr){
// for(let i=0;i<arr.length;i++){
//     yield arr[i];
// }} 

// let GeneratorObj=GeneratorFunction([1,2,3,4])
// console.log(GeneratorObj)
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())




///
//// use-case-4
/////

// function* GeneratorFunction(arr){
//     for(let i=0;i<arr.length;i++){
//         yield arr[i];
//     }} 
    
// let GeneratorObj=GeneratorFunction([1,2,3,4,5,6,7,8,9,12,3,4])
// console.log(GeneratorObj)
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.return(10))
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())
// console.log(GeneratorObj.next())



///
//// use-case-5
/////

function* GeneratorFunction(id){

    while (true) {
        let increment=yield id
        if(increment!=null){
            id+=increment
        }
        else{
            id++
        }
    }
}
    
let GeneratorObj=GeneratorFunction(0)
console.log(GeneratorObj)
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next(5))
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.throw (new Error("hi!!")))
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())
console.log(GeneratorObj.next())