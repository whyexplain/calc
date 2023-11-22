document.addEventListener('keydown', (event) => {})








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

