const moment = require('moment')
const request = require('request-promise');

// Question 1

const getFiboOddSum = (n) => {
    if (n <= 1) {
        return n
    }
    var prev, cur, temp, s;
    prev = 0
    cur = 1
    s = 0
    while (cur < n) {
        if (cur % 2) {
            s += cur
        }
        temp = cur
        cur = prev + temp
        prev = temp

    }
    return s
}

//Question 2

const getPowerSet = (arr) => {
    var res = [
        []
    ]
    for (var i = 0; i < arr.length; i++) {
        var l = res.length;
        for (var j = 0; j < l; j++) {
            res.push(res[j].concat(arr[i]))
        }
    }
    return res
}

function getPowerSetRecursive(arr) {
    var res = [];

    function helper(i, set) {
        if (i === arr.length) {
            res.push(set);
            return;
        }
        helper(i + 1, set);
        helper(i + 1, set.concat([arr[i]]));
    }

    helper(0, []);
    return res;
}

// Question 3

const useOn = (f1, f2) => {
    return (arrOne, arrTwo) => {
        var val1 = f2(arrOne)
        var val2 = f2(arrTwo)
        return [val1, val2].reduce(f1)
    }
}

// Question 4

/*
 * @param fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param acc The accumulator value.
 * @param list The list to be reduced
 */
const myreduce = function (fn, acc, list) {
    list.forEach(ele => {
        acc = fn(acc, ele)
    })
    return acc
}

const myreduceRecursion = function (fn, acc, list) {
    const helper = (i) => {
        if (i === list.length) {
            return acc
        }
        acc = fn(acc, list[i])
        return helper(i + 1)
    }
    return helper(0)
}

/*
 * @param xf The function to be called on every element of the input list
 * @param list The list to be transforned
 */
const mymap = function (xf, list) {
    return myreduceRecursion((acc, val) => {
        acc.push(xf(val))
        return acc
    }, [], list)
}

/*
 * @param pred The predicate function that returns a boolean
 * @param list The list to be filtered
 */
const myfilter = function (pred, list) {
    return myreduceRecursion((acc, val) => {
        if (pred(val))
            acc.push(val)
        return acc
    }, [], list)
}

// Question 5

const getTotalOperations = (st) => {
    var total = 0
    var arr = st.split(' ')
    var start = moment(arr[4], "DDMMMYY")
    var end = moment(arr[5], "DDMMMYY")

    var daysToCalculate = []
    if (arr[6][6] == '.')
        daysToCalculate.push(false)
    else
        daysToCalculate.push(true)
    for (var i = 0; i < arr[6].length - 1; i++) {
        if (arr[6][i] === '.')
            daysToCalculate.push(false)
        else
            daysToCalculate.push(true)
    }

    daysToCalculate.forEach((check, i) => {
        if (check === true) {
            let cur = start.clone();
            if (cur.isoWeekday() <= i) {
                cur = cur.isoWeekday(i);
            } else {
                cur.add(1, 'weeks').isoWeekday(i);
            }
            while (cur.isSameOrBefore(end)) {
                cur.day(7 + i);
                total += 1;
            }
        }
    });
    return total
}

// Question 6

async function getMinMaxTemp(list) {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
    const sufixURL = '&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&'
    var minTemp = Number.MAX_SAFE_INTEGER
    var minCity = ''
    var maxTemp = Number.MIN_SAFE_INTEGER
    var maxCity = ''
    for (var i = 0; i < list.length; i++) {
        await request(baseURL + list[i] + sufixURL, function (error, response, body) {
            curTemp = JSON.parse(body)['main']['temp']
            if (curTemp < minTemp) {
                minTemp = curTemp;
                minCity = list[i]
            }
            if (curTemp > maxTemp) {
                maxTemp = curTemp;
                maxCity = list[i]
            }
        })
    }
    return {
        minCity,
        maxCity
    }
}

module.exports = {
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
}