function calculate(num1, num2) {
    let answer = num1 + num2
    return answer
}

let userNumber1 = prompt('Insert your first number here')
let userNumber2 = prompt('Insert your second number here')
let userAnswer = calculate(userNumber1, userNumber2)

alert(`The sum of ${userNumber1} and ${userNumber2} is ${userAnswer}`)