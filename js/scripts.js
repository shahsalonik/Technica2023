/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// // Use this file to add JavaScript to your project
// import imageProcessing from './imageProcessing';

// // Global variable to store the processed object
// var quizData = [];

// function processImages() {
//     // Call the function to get the processed object
//     quizData = imageProcessing();
//     console.log('Received Object:', randomImageLabelList);
//     // Perform further processing or operations with randomImageLabelList
// }

// // Call the function to initiate the process
// processImages();

const quizData = [
    {
      question: 'Please classify this item.',
      image: 'trashCollectionImages/cardboard/cardboard1.jpg', 
      options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
      answer: 'cardboard',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/paper/paper5.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'paper',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/glass/glass23.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'glass',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/cardboard/cardboard35.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'cardboard',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/metal/metal32.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'metal',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/paper/paper130.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'paper',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/trash/trash69.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'trash',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/glass/glass31.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'glass',
    },
    {
        question: 'Please classify this item.',
        image: 'trashCollectionImages/paper/paper45.jpg', 
        options: ['glass', 'paper', 'cardboard', 'plastic', 'metal', 'trash'],
        answer: 'paper',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
    console.log(questionData)
    // const questionElement = document.createElement('div');
    // questionElement.className = 'question';
    // questionElement.innerHTML = questionData.question;

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    var elem = document.createElement("img");
    elem.src = questionData.image;
    questionElement.appendChild(elem);

    // const imageElement = document.createElement('div');
    // imageElement.className = 'question';
    // imageElement.appendChild(questionData.image);
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();