const functions = require('./functions')
const input = require('./input')
const {
    getFiboOddSum,
    getPowerSet,
    getPowerSetRecursive,
    useOn,
    myreduce,
    myreduceRecursion,
    mymap,
    myfilter,
    getTotalOperations,
    getMinMaxTemp
} = functions

console.log("Question 1")
console.log(getFiboOddSum(input.q1))
console.log("")
console.log("Question 2")
console.log("Using loops")
console.log(getPowerSet(input.q2))
console.log("Using recursion")
console.log(getPowerSetRecursive(input.q2))
console.log("")
console.log("Question 3")
var addReducer = (x, y) => x + y
var multiplyReducer = (x, y) => x * y
var _ = {
    sum: (arr) => arr.reduce(addReducer),
    add: (arr) => arr.reduce(addReducer),
    multiply: (arr) => arr.reduce(multiplyReducer)
}
console.log("sumOfSums")
var sumOfSums = useOn(_.add, _.sum)
console.log(sumOfSums(input.q3.arr1, input.q3.arr2))
console.log("productOfSums")
var productOfSums = useOn(_.multiply, _.sum)
console.log(productOfSums(input.q3.arr1, input.q3.arr2))
console.log("")
console.log("Question 4")
console.log("Using forEach")
console.log(myreduce(input.q4.fun, input.q4.acc, input.q4.list))
console.log("")
console.log("Using recursion")
console.log(myreduceRecursion(input.q4.fun, input.q4.acc, input.q4.list))
console.log("")
console.log("Map using reduce function")
const doubleValue = (val) => 2 * val;
console.log(mymap(doubleValue, input.q4.list))
console.log("Filter using reduce function")
const isOdd = (val) => val % 2
console.log(myfilter(isOdd, input.q4.list))
console.log("")
console.log("Question 5")
console.log(getTotalOperations(input.q5))
console.log("")
console.log("Question 6")
getMinMaxTemp(input.q6).then(res => console.log(res))