/*HEHEHA*/
document.addEventListener("keydown", (event) => {
    if(event.key == "0") {if (answer > 0){
        clearDE()
    }
    else {input(0)}}
    if(event.key == "1") {if (answer > 0){
        clearDE()
    }
    else {input(1)}}
    if(event.key == "2") {if (answer > 0){
        clearDE()
    }
    else {input(2)}}
    if(event.key == "3") {if (answer > 0){
        clearDE()
    }
    else {input(3)}}
    if(event.key == "4") {if (answer > 0){
        clearDE()
    }
    else {input(4)}}
    if(event.key == "5") {if (answer > 0){
        clearDE()
    }
    else {input(5)}}
    if(event.key == "6") {if (answer > 0){
        clearDE()
    }
    else {input(6)}}
    if(event.key == "7") {if (answer > 0){
        clearDE()
    }
    else {input(7)}}
    if(event.key == "8") {if (answer > 0){
        clearDE()
    }
    else {input(8)}}
    if(event.key == "9") {if (answer > 0){
        clearDE()
    }
    else {input(9)}}
    if(event.key == "/") {input("/")}
    if(event.key == "Enter") {operate2()}
    if(event.key == "Backspace") { arrayDN.pop()
        displayNumbers.textContent = arrayDN.join('')}
    if(event.key == "a") { input(answer2)}
    if(event.key == "+") {input("+")}
    if(event.key == "*") {input("*")}
    if(event.key == "-") {input("-")}
    if(event.key == ".") {input(".")}
    if(event.key == "(") {input("(")}
    if(event.key == ")") {input(")")}
    if(event.key == "c") {clearD()}
    if(event.key == "O") {window.open('','_self').close()}
})






let newValue = 0
let curValue = 0
let answer = 0
let answer2 = ""
let arrayDN = []
console.log(arrayDN)

function input (number, newV) {
    arrayDN.push(number)
    if (arrayDN.length > 26) {displayAnswer.textContent = 'Number Too Big.'}
    else {
    displayNumbers.textContent = arrayDN.join("")
    newValue = arrayDN.join("")
    console.log(newValue)
    }
}
function operate2 (op) {
    if (newValue.includes('//') === true ||
        newValue.includes('/*') === true ||
        newValue.includes('*/') === true ||
        newValue.includes('+/') === true ||
        newValue.includes('/+') === true ||
        newValue.includes('/-') === true ||
        newValue.includes('-/') === true ||
        newValue.includes('**') === true ||
        newValue.includes('*+') === true ||
        newValue.includes('+*') === true ||
        newValue.includes('*-') === true ||
        newValue.includes('-*') === true ||
        newValue.includes('++') === true ||
        newValue.includes('+-') === true ||
        newValue.includes('-+') === true ||
        newValue.includes('--') === true ||
        newValue.includes('./') === true ||
        newValue.includes('.*') === true ||
        newValue.includes('.+') === true ||
        newValue.includes('.-') === true
    ) {
        displayAnswer.textContent = 'Syntax Error.'
    }
    else {
    answer = eval(newValue)
    console.log(answer)
    displayAnswer.textContent = answer
        console.log(answer)
        answer2 = answer
    }
}


function clearD () {
    arrayDN.splice(0, arrayDN.length);
    answer = ""
    answer2= ""
    displayNumbers.textContent = arrayDN.join("")
    displayAnswer.textContent = arrayDN.join("")
}

function clearDE () {
    answer = ""
    arrayDN.splice(0, arrayDN.length);
    displayNumbers.textContent = arrayDN.join("")
    displayAnswer.textContent = arrayDN.join("")
}



const contain = document.querySelector('#contain')

const displayNumbers = document.createElement('p')
displayNumbers.classList.add('displayNumbers')

contain.appendChild(displayNumbers)

const displayAnswer = document.createElement('p')
displayAnswer.classList.add('displayAnswer')

answerB.appendChild(displayAnswer)

