function calculate(num1, num2){
    let answer = num1 + num2
    return answer
}

let userNumber1 = parseInt(prompt('Insert your first number here'))
let userNumber2 = parseInt(prompt('Insert your second number here'))
let userAnswer = calculate(userNumber1, userNumber2)

console.log(`The sum of ${userNumber1} and ${userNumber2} is ${userAnswer}`)