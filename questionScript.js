//TODO: Add scores table at the end
//TODO: Add correct at top

const quizData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<script>",
    c: "<javascript>",
    d: "<scripting>",
    correct: "b",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "Both the <head> section and the <body> section are correct",
    c: "The <body> section",
    d: "None of the above",
    correct: "b",
  },
  {
    question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
    a: `<script href="xxx.js">`,
    b: `<script name="xxx.js">`,
    c: `<script id="xxx.js">`,
    d: `<script src="xxx.js">`,
    correct: "d",
  },
  {
    question: "How do you create a function in JavaScript?",
    a: "function myFunc()",
    b: "def myFunc()",
    c: "function:myFunc()",
    d: "let function myFunc()",
    correct: "a",
  },
];

const question_text = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let headerText = document.getElementById("headerText");
let trueQuestion = 0;
let falseQuestion = 0;
let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  question_text.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    headerText.innerText = "Yeeey! You finished. True: 2 Wrong: 2";
  }
});
