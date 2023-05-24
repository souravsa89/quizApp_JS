const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci"],
    answer: "Da Vinci",
  },
];

const root = document.getElementById("root");

let currentQuestion = 0;
let score = 0;

const handleAnswerClick = () => {
  const selectedOption = document.querySelector(
    'input[name="answer"]:checked'
  ).value;
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  render();
};

const render = () => {
  const template =
    currentQuestion < questions.length
      ? `<div>
        <h1>Quiz Game</h1>
        <h2>${questions[currentQuestion].question}</h2>
        <form>
          ${questions[currentQuestion].options
            .map(
              (option, index) =>
                `<div key=${index}>
              <input type="radio" id="option${
                index + 1
              }" name="answer" value="${option}">
              <label for="option${index + 1}">${option}</label>
            </div>`
            )
            .join("")}
          <button type="button" onclick="handleAnswerClick()">Submit</button>
        </form>
        <p>Score: ${score}</p>
      </div>`
      : `<div>
        <h1>Quiz Game</h1>
        <p>Game over! Your score is ${score}.</p>
      </div>`;
  root.innerHTML = template;
};

render();
