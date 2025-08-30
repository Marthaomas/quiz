const questions = [
    {
      question: "whats her comfort food?",
      answers: [
        {text: "Ice-cream", correct: false},
        {text: "Chocolate", correct: false},
        {text: "Banana bread ", correct:true},
        {text: "Pizza", correct:false}
      ]
    },
    {
      question: "How many countries does she want to visit before 27?",
      answers: [
        {text: "4", correct: false},
        {text: "9 or more", correct:true},
        {text: "2", correct: false},
        {text: "8 or more", correct:false}
      ]
    },
    {
      question: "What is Her favourite colour?",
      answers: [
        {text: "Yellow", correct: true},
        {text: "Nude", correct: false},
        {text: "Black/Red", correct: false},
        {text: "Blue", correct: false}
      ]
    },
    {
      question: "What does she do to when she feels sad?",
      answers: [
        {text: "Talk to friends", correct: true},
        {text: "post on Tiktok", correct: false},
        {text: "Pray", correct: true},
        {text: "Talk her family", correct: true}
      ]
    },
    {
      question: "How many siblings does she have?",
      answers: [
        {text: "2", correct: false},
        {text: "1", correct: false},
        {text: "3", correct: true},
        {text: "4", correct: false}
      ]
    },
    {
      question: "When is she graduating?",
      answers: [
        {text: "2027", correct: true},
        {text: "2026", correct: false},
        {text: "unknow", correct: false},
        {text: "2028", correct: false}
      ]
    },
    {
      question: "what is her comfort movie?",
      answers: [
        {text: "Barbie", correct: false},
        {text: "Conjuring", correct: false},
        {text: "Tall Girl", correct: true},
        {text: "Insidious", correct: false}
      ]
    },
    {
      question: "Does she use sarcasm alot ?",
      answers: [
        {text: "sometimes", correct: false},
        {text: "Never", correct: false},
        {text: "Always", correct: true},
        {text: "Maybe", correct: false}
      ]
    },
    {
      question: "What the name of her stuffed animal when growing up?",
      answers: [
        {text: "Fifi", correct: false},
        {text: "Bobo", correct: true},
        {text: "mike", correct: false},
        {text: "bunny", correct: false}
      ]
    },
    {
      question: "What one word she say very often?",
      answers: [
        {text: "nope", correct: false},
        {text: "Never mind", correct: false},
        {text: "Do you get", correct: true},
        {text: "For", correct: false}
      ]
    }
  ];
  
  // ------------------- DOM Elements -------------------
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const resultText = document.getElementById("result-text");
  const buttonContainer = document.getElementById("button-container");

  let currentQuestionIndex = 0;
  let score = 0;
  
  // ------------------- Functions -------------------
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultText.style.display = "none";
    nextButton.style.display = "none";
    questionElement.style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
  
    if(correct) {
        selectedButton.style.background = "green";
        score++;
      } else {
        selectedButton.style.background = "red";
      }  
      
        // Disable all buttons so only one click counts
        Array.from(answerButtons.children).forEach(button => button.disabled = true);
      
        nextButton.style.display = "block";
      }
      
  
   
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    resetState();
    questionElement.style.display = "none";
    nextButton.style.display = "none";
  
    let message = "";
    if(score === 0 || score === 1 || score == 2) message = "😒 Like be for real ... do you even know her?";
    else if(score === 3 || score == 4 || score == 5) message = "🤔 You probably just guessed .... but not enough!";
    else if(score === 6 || score === 7 || score === 8 || score === 9  ) message = "👏 Not bad, But still listen more";
    else if(score === questions.length) message = "🎉 Perfect! You know Temi so well!";
  
    resultText.style.display = "block";
    
    resultText.innerHTML = `You scored ${score} out of ${questions.length}.<br>${message}`;
    
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.innerHTML = ""; // clear previous buttons

    const playAgain = document.createElement("button");
    playAgain.innerText = "Play Again";
    playAgain.classList.add("next-btn");
    playAgain.addEventListener("click", () => {
      resultText.style.display = "none";
      questionElement.style.display = "block";
      buttonContainer.innerHTML = ""; // clear button
     startQuiz();
});

buttonContainer.appendChild(playAgain);
 

    // Optional: Add "Play Again" button dynamically
    // buttonContainer.innerHTML = "";
    // const playAgain = document.createElement("button");
    // playAgain.innerText = "Play Again";
    // playAgain.classList.add("next-btn");
    // playAgain.addEventListener("click", () => {
    // buttonContainer.appendChild(playAgain); 
    // });
    // answerButtons.appendChild(playAgain);
  }
  
  // ------------------- Start -------------------
  startQuiz();
  
// ------------------- Quiz Data -------------------
// const questions = [
//     { question: "Which animal does Temi prefer?", answers: [
//         {text:"Cat", correct:false}, {text:"Fish", correct:false},
//         {text:"Duck", correct:false}, {text:"Dog", correct:true}
//       ] 
//     },
//     { question: "How many countries does she want to visit before 27?", answers: [
//         {text:"4", correct:false}, {text:"10 or more", correct:false},
//         {text:"2", correct:false}, {text:"8 or more", correct:true}
//       ] 
//     },
//     { question: "What is Temi's favourite colour?", answers: [
//         {text:"Black", correct:false}, {text:"Nude", correct:true},
//         {text:"Red", correct:false}, {text:"Blue", correct:false}
//       ] 
//     },
//     { question: "What was the last book Temi read?", answers: [
//         {text:"Ugly love", correct:true}, {text:"Purple Hibiscus", correct:false},
//         {text:"Reminders of Him", correct:false}, {text:"All the Men in Lagos Are Mad", correct:false}
//       ] 
//     },
//     { question: "How many siblings does she have?", answers: [
//         {text:"2", correct:false}, {text:"1", correct:false},
//         {text:"3", correct:true}, {text:"4", correct:false}
//       ] 
//     }
//   ];
  
//   // ------------------- DOM Elements -------------------
//   const questionElement = document.getElementById("question");
//   const answerButtons = document.getElementById("answer-buttons");
//   const nextButton = document.getElementById("next-btn");
//   const resultText = document.getElementById("result-text");
//   const buttonContainer = document.getElementById("button-container");

//   let currentQuestionIndex = 0;
//   let score = 0;

//   // ------------------- Event Listeners -------------------
//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length) {
//       showQuestion();
//     } else {
//       showScore(); // runs when quiz ends
//     }
//   });
  
//   // ------------------- Functions -------------------
//   function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     resultText.style.display = "none";
//     nextButton.style.display = "none";
//     questionElement.style.display = "block";
//     showQuestion();
//   }
  
//   function showQuestion() {
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  
//     currentQuestion.answers.forEach(answer => {
//       const button = document.createElement("button");
//       button.innerText = answer.text;
//       button.classList.add("btn");
  
//       // ✅ Set data-correct for all buttons
//       button.dataset.correct = answer.correct;
  
//       button.addEventListener("click", selectAnswer);
//       answerButtons.appendChild(button);
//     });
//   }
  
//   function resetState() {
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
//   }
  
//   function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct === "true";
  
//     // ✅ Only clicked button changes color
//     if(correct) {
//       selectedButton.style.background = "green";
//       score++;
//     } else {
//       selectedButton.style.background = "red";
//     }
  
//     // Disable all buttons so they cannot change their answer
//     Array.from(answerButtons.children).forEach(button => button.disabled = true);
  
//     // Show Next button
//     nextButton.style.display = "block";
//   }
  
//   // ------------------- Next Button -------------------
//   nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length) {
//       showQuestion();
//     } else {
//       showScore();
//     }
//   });
  
//   // ------------------- Show Score -------------------
//   function showScore() {
//     resetState();
//     questionElement.style.display = "none";
//     nextButton.style.display = "none";
  
//     let message = "";
//     if(score <= 1) message = "😒 Boo... do you even know her?";
//     else if(score === 2) message = "🤔 Hmm... you know a little, but not enough!";
//     else if(score === 3 || score === 4) message = "👏 Not bad, you’re getting there!";
//     else if(score === questions.length) message = "🎉 Perfect! You know Temi so well!";
  
//     resultText.style.display = "block";
//     resultText.style.marginBottom = "20px"; // gap between message and button
//     resultText.innerHTML = `You scored ${score} out of ${questions.length}.<br>${message}`;
  
//     // Play Again button below
//     const buttonContainer = document.getElementById("button-container");
//   buttonContainer.innerHTML = ""; // clear previous buttons

//   const playAgain = document.createElement("button");
//   playAgain.innerText = "Play Again";
//   playAgain.classList.add("next-btn");
//   playAgain.addEventListener("click", () => {
//     resultText.style.display = "none";
//     questionElement.style.display = "block";
//     buttonContainer.innerHTML = ""; // clear button
//     startQuiz();
//   });

//   buttonContainer.appendChild(playAgain);
// }


  
//   // ------------------- Start Quiz -------------------
//   startQuiz();
