// const {fizzBuzz, maximumWealth2} = require ("./to-test.js")
// const fizzBuzz = require ("./to-test.js")
const functions = require ("./to-test.js")
const fizzBuzz = functions.fizzBuzz
const maximumWealth2 = functions.maximumWealth2

// import {fizzBuzz, maximumWealth2} from "./to-test.js"
test("Maximum Wealth", () => {
    expect (
        maximumWealth2([[1,2,3, 7],[3,2,1], [6,9]])
    ).toStrictEqual(15)
})

test("fizzBuzz", () => {
    expect (
        fizzBuzz(15)
    ).toStrictEqual(
        ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])
})