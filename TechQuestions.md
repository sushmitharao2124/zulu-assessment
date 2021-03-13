
## Questions

1. Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 0 and 1, the first 10 terms will be:
`0, 1, 1, 2, 3, 5, 8, 13, 21, 34`. 

 Write a function that **sums** all **odd fibonacci numbers** lesser than a user provider max. For example:
 
 ```
 myfib(10) = 10 // sum of all odd numbers in [ 0, 1, 1, 2, 3, 5, 8 ]
 
 myfib(100) = 188 // sum of all odd numbers in [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]
 ```

2.  A **power set** is **the set of all subsets** (including the empty set) of a given set. A set of n elements will generate a power set with 2 <sup>n</sup> elements. Write a powerSet function. For example:

  ```
  powerSet([1,2,3]) = [ [ 1 ], [ 1, 2 ], [ 2 ], [ 1, 3 ], [ 1, 2, 3 ], [ 2, 3 ], [ 3 ], [] ]
  ```
  Can you come up with a recursive variant of your solution?

3. Sometimes its useful to run the same transformation on all arguments of a function before using them. For example
 
 ```
 function sumOfSumOfArrays(arrOne, arrTwo) {
   const sumOne = _.sum(arrOne)
   const sumTwo = _.sum(arrTwo)
   return sumOne + sumTwo
 }
 ```
 
 We are running the sum function on both inputs. Write a function called `useOn` which given a function and a transform function, runs the transform function on each arguments and passes the result to the original function. For example:
 
 ```
 var sumOfSums = useOn(_.add, _.sum)
 sumOfSums([10, 20, 30], [100, 200, 300]) = 660 // 60 + 600
 var productOfSums = useOn(_.multiply, _.sum)
 productOfSums([10, 20, 30], [100, 200, 300]) = 36000 // 60 * 600
 ```
4. The reduce (also known as fold) is a useful transformation function. Write your own reduce function (left or right). For e.g.,

```
/*
 * @param fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param acc The accumulator value.
 * @param list The list to be reduced
 */
const myreduce = function(fn, acc, list) {
  // body goes here
}

myreduce((acc, elem) => acc + elem, 0, [1,2,3]) => 6 (summing up the elements)
```
Can you write a recursive implementation of reduce? Don't worry about stack overflows on large lists

All common transformation functions like `map` and `filter` can be implemented in terms of `reduce`. Can you implement `map` and `filter` to use your reduce function?
```
/*
 * @param xf The function to be called on every element of the input list
 * @param list The list to be transforned
 */
const mymap = function(xf, list) {
  // body goes here
}

/*
 * @param pred The predicate function that returns a boolean
 * @param list The list to be filtered
 */
const myfilter = function(pred, list) {
  // body goes here
}
```

5. It is common in the airline industry to represent the operations of a flight using a date range and ISO day of week combination. For e.g., if American Airlines operates a flight AA 1010 every day in Mar 2018, then it would be reprsented a a string like below:
```
"AA 1010 DFW JFK 01Mar18 31Mar18 1234567"
AA is the airline code
1010 is the flight number
DFW is the departing station
JFK is the arrival station
01Mar18 is the effective or start date
31Mar18 is the discontinue or end date
1234567 are the day of the week that the flight operates 1 - Mon, 2- Tue, 3- Wed, 4 - Thur, 5- Fri, 6 - Sat, 7 - Sun
```

Similary, a flight that operates every Sunday in Mar from DFW to JFK would be string represented as
```
"AA 2020 DFW JFK 04Mar18 25Mar18 ......7"
Notice the '.' for no-operational day
```

And again, a flight that operates in the same market but on Wednesdays and Thursdays in Mar would be
```
"AA 3030 DFW JFK 01Mar18 29Mar18 ..34..."
```

Write a function that given a string representation of a flight returns the number of daily operations that flight performs. For e.g., in the above case, flight AA 3030 has 9 operations in the month of Mar 2018. You can use the `moment.js` library for a lot of date/str parsing and to determine the ISO day of week from a date. 

6. The open weather API allows querying for temperatures/humidity and other weather information for cities. The URL is
 `http://api.openweathermap.org/data/2.5/weather?q={city}&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&`. Write a function that given an array of cities returns the city with the highest current temperature and the city with the lowest current temperature
 
## Submission
You can create one GitHub repo for the solutions along with the unit tests. You are free to choose any utility library (lodash, ramda etc) as well as a promise library you are familiar with for the solutions.