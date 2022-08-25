const sumRange = (num) => {
 if(num===1) {return 1}
 return num + sumRange(num-1)
}

console.log(sumRange(6))

const power = (base, exp) => {
    if (exp === 0) {return 1}
    return base* power(base, exp - 1)
}

console.log(power(2,4))

const factorial = (n) => {
    if (n===1 | n===0) {return 1}
    return n* factorial(n-1)
}

console.log(factorial(3))


const all = (arr, callback) => {
    // arr.slice();
    if (arr.length === 0) { return true} 
    if (callback(arr[0])){
        arr.shift()
        console.log(arr)
        return all(arr, callback)
    } else {return false}
}

const allAreLessThanSeven = all([1,2,6], function(n) {return n<7})
console.log(allAreLessThanSeven)

const productOfArray = (arr) => {
    if(arr.length === 0) {return 1}
    return arr.shift() * productOfArray(arr)
}

console.log(productOfArray([2,6,7]))