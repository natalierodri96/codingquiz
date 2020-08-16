const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct= answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
  nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
  question: 'What is considered a bug?',
  answers: [
    { text: 'bees', correct: true},
    { text: 'flies', correct: true},
    { text: 'crickets', correct: true},
    { text: 'an error', correct: true}
  ]
  },
  {
    question: 'What is coding?',
    answers: [
    { text: 'software', correct: false},
    { text: 'instructions for computers', correct: true},
    { text: 'type of Integrated Development Environment', correct: false},
    { text: 'open-source operating system', correct: false}
    ]
  },
  {
    question: 'What is HTML?',
    answers: [
    { text: 'HyperText Markup Language', correct: true},
    { text: 'Cascading Style Sheets', correct: false},
    { text: 'Integrated Development Environment', correct: false},
    { text: 'Java', correct: false}
    ]
  },
  {
    question: 'What Checks a condition and runs a code block?',
    answers: [
    { text: 'arrays', correct: false},
    { text: 'loops', correct: true},
    { text: 'tags', correct: false},
    { text: 'div', correct: false}
    ]
  },
  {
    question: 'What is the name of the container that holds a single number, word, or other information?',
    answers: [
    { text: 'variable', correct: true},
    { text: 'arrays', correct: false},
    { text: 'loops', correct: false},
    { text: 'statment', correct: false}
    ]
  },
  {
    question: 'What is java?',
    answers: [
    { text: 'coffee', correct: false},
    { text: 'cup of joe', correct: false},
    { text: 'programming language', correct: true},
    { text: 'spreedsheet', correct: false}
    ]
  }
]

  var secondsLeft = 700
  var timerInterval = 0
  function setTime(){
      timerInterval = setInterval(function(){
        secondsLeft --;
        timeleft.textContent = secondsLeft
        if(secondsLeft <= 0){
          secondsLeft = 0
          clearInterval(timerInterval);
        }
      }, 1000 //whatever you want the speed of time to be
      )
    }
    setTime();