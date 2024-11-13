console.log("\n")
a=[1,2,3,4,5]
console.log(a)
console.log("\n")

console.log("length :",a.length)
console.log("element at index 1",a[1])
console.log("element at index 1",a.at(1))
console.log("\n")

console.log("slice ")
// 1 The slice() method returns selected elements in an array, as a new array.
// 2 The slice() method selects from a given start, up to a (not inclusive) given end.
// 3 The slice() method does not change the original array.
// Syntax :
// array.slice(start, end)
console.log(a.slice(1,3))
console.log("\n")



console.log("Changing Elements")
a[0]="jitu"
console.log(a)
console.log("\n")


console.log(a)
console.log(a.join(" and "))
console.log("\n")

console.log("tpstring")
console.log(a.toString())
console.log("\n")


//type of array is always an object
console.log("type of an arr",typeof a)
console.log("\n")

console.log("Pops last element")
a.pop()
console.log(a)
console.log("\n")

console.log("Pushing 400")
a.push(400)
console.log(a)
console.log("\n")

console.log("Shift -> removes the first element ")
a.shift()
console.log(a)
console.log("\n")


console.log("UnShift Method -->pushes the first element")
a.unshift(100)
console.log(a)
console.log("\n")

console.log("deleting the element")
delete a[2]//delete
console.log("a :",a)
console.log("\n")


console.log("concatenation")
// 1 The concat() method of Array instances is used to merge two or more arrays. 
// 2 This method does not change the existing arrays,*******
// 3 but instead returns a new array.
b=[6,7]
c=[8,9]
console.log("b :",b)
console.log("c :",c)
console.log(a.concat(b,c))
console.log(a+b+c)
console.log("\n")


console.log("Splice Method")
// 1 The splice() method adds and/or removes array elements.
// 2 The splice() method overwrites the original array.*********
// Syntax :
// array.splice(index, count, item1, ....., itemX)
// index	    -->         Required.(The index (position) to add or remove items.
//                          negative value counts from the end of the array.)
// count        --->    	Optional.(Number of items to be removed.)
// 
// item1, ...,	--->        Optional(The new elements(s) to be added.)
//
d=[10,20,30,40,50]
console.log("Before  splice            :",d)
console.log("Appling splice(1,3,60,70) :",d.splice(1,3,60,70))
// At position1 remove 3 elements i.e. (20,30,40) and  add elements (60,70)
console.log("After   splice            :",d)
console.log("\n")


// 1 The toSpliced() method adds and/or removes array elements.
// 2 The toSpliced() method returns a new array.
// 3 The toSpliced() method does not change the original array.******
// 4 The toSpliced() method is the copying version of the splice() method.
e=[10,20,30,40,50]
console.log("Before  toSpliced            :",e)
console.log("Appling toSpliced(1,3,60,70) :",e.toSpliced(1,3,60,70))
// At position1 remove 3 elements  i.e. (20,30,40) and  add elements (60,70)
console.log("After   toSpliced            :",e)
console.log("\n")


console.log("a :",a)
console.log("a.reverse():",a.reverse())
console.log("a.sort()   :",a.sort())
console.log("\n")










































