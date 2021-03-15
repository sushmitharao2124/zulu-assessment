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

test('test fibonacci odd sum', () => {
    expect(getFiboOddSum(input.q1)).toBe(5)
})

test('powerset of arr using loops', () => {
    expect(getPowerSet(input.q2)).toStrictEqual([
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3]
    ])
})

test('powerset of arr using recursion', () => {
    expect(getPowerSetRecursive(input.q2)).toStrictEqual([
        [],
        [3],
        [2],
        [2, 3],
        [1],
        [1, 3],
        [1, 2],
        [1, 2, 3]
    ])
})

test('transformation function should return sum of sums', () => {
    const sum = (arr) => arr.reduce((a, b) => a + b)
    var _ = {
        add: (a, b) => a + b,
    }
    expect(useOn(_.add, sum)(input.q3.arr1, input.q3.arr2)).toBe(660)
})

test('transformation function should return product of sums', () => {
    const sum = (arr) => arr.reduce((a, b) => a + b)
    var _ = {
        multiply: (a, b) => a * b,
    }
    expect(useOn(_.multiply, sum)(input.q3.arr1, input.q3.arr2)).toBe(36000)
})

test('myreduce should return sum of the list using loop', () => {
    expect(myreduce(input.q4.fun, input.q4.acc, input.q4.list)).toBe(6)
})

test('myreduce should return sum of the list using recursion', () => {
    expect(myreduceRecursion(input.q4.fun, input.q4.acc, input.q4.list)).toBe(6)
})

test('map using reduce should return array with doubling the elements', () => {
    const doubleValue = (val) => 2 * val;
    expect(mymap(doubleValue, input.q4.list)).toStrictEqual([2, 4, 6])
})

test('filter using reduce should return array with only odd elements', () => {
    const isOdd = (val) => val % 2
    expect(myfilter(isOdd, input.q4.list)).toStrictEqual([1, 3])
})

test('get total operations should return 9 for the string "AA 3030 DFW JFK 01Mar18 29Mar18 ..34..."', () => {
    expect(getTotalOperations(input.q5)).toBe(9)
})

test('get the city with min temperature and max temperature should return correct values', () => {
    getMinMaxTemp(input.q6).then(res => expect(res).toStrictEqual({
        minCity: 'iceland',
        maxCity: 'dubai'
    }))
})