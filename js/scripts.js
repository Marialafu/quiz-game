const rangeBarElement = document.getElementById('range-bar')
const timersContainerElement = document.getElementById('timers')



const rangeBarNumber = rangeBarElement.previousElementSibling


rangeBarNumber.textContent = rangeBarElement.value

const defineAmountQuestions = () => {
    rangeBarNumber.textContent = rangeBarElement.value
    return rangeBarElement.value
}

const defineAmountTimeForQuestion = event => {
    console.log(event.target.value);
    
    
}




rangeBarElement.addEventListener('input', defineAmountQuestions)
timersContainerElement.addEventListener('click', defineAmountTimeForQuestion)