const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})



function startGame(){
 startButton.classList.add('hide')
 shuffledQuestions = questions.sort(()=> Math.random()-.5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
 countRightAnswers = 0
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
 questionElement.innerText = question.question
 question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function selectAnswer(e){
    const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    countRightAnswers = 0;
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
 // +1, change it if you need +10, +25 etc
 }
 document.getElementById('right-answers').innerHTML = countRightAnswers + "/5 Questions Answered Correctly"; // span will show the score
 if (countRightAnswers > 4){
     alert("link")
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
        question: 'What bot rose from ~$700 to ~$1600 about 1-2 weeks ago?',
        answers: [
            { text:'SoleAIO ',correct: true},
            { text:'Tohru ',correct: false},
            { text:'Cyber ',correct: false},
            { text:'Mekpreme ',correct: false}
        ]
    },
    {
        question: 'What bot is currentlly the "King of Yeezysupply" ?',
        answers: [
            { text:'Splashforce ',correct: false},
            { text:'Cyber ',correct: false},
            { text:'Polaris ',correct: true},
            { text:'Kodai',correct: false}
        ]
    },
    {
        question: 'Which of these bots was once at ~$2000 resell but is currently retail',
        answers: [
            { text:'Samurai Bypass ',correct: false},
            { text:'EveAIO ',correct: false},
            { text:'Sieupreme ',correct: true},
            { text:'Candypreme',correct: false}
        ]
    },
    {
        question: 'What is the name of the bot that recently went cookieless on footsites and is at 70k followers on Twitter?',
        answers: [
            { text:'Project Destroyer ',correct: false},
            { text:'Balko ',correct: true},
            { text:'Phantom ',correct: false},
            { text:'Wrath',correct: false}
        ]
    },
    {
        question: 'Which of these bots is currently the most volatile on the market?',
        answers: [
            { text:'Cyber ',correct: false},
            { text:'Eve ',correct: false},
            { text:'Tohru ',correct: false},
            { text:'Rush ',correct: true}
        ]
    }
]