const fizzBuzz = function(n) {
    
    let arr = []
  for(let i=1; i<n+1; i++){
      arr.push(i)
    }

  const newArr = arr.map((num)=> 
         {if (num%3===0 && num%5===0){return "FizzBuzz"}
         else if (num%3===0){return "Fizz"}
  else if (num%5===0){return "Buzz"}
  else {return num.toString()}})
  return newArr
  };

const maximumWealth2 = function(accounts) {
    const arr = accounts.map((account) => account.reduce((acc, currentValue) => acc + currentValue, 0) )
    return Math.max(...arr)
  };

  module.exports = {fizzBuzz:fizzBuzz, maximumWealth2:maximumWealth2};