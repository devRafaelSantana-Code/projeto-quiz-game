const questionAreaEl = document.querySelector(".questionArea");
const scoreAreaEl = document.querySelector(".scoreArea");
const progressBarEl = document.querySelector(".progress--bar");
const questionTitleEl = document.querySelector(".question");
const optionsContainerEl = document.querySelector(".options");
const scoreText1El = document.querySelector(".scoreText1");
const scoreText2El = document.querySelector(".scoreText2");
const scorePctEl = document.querySelector(".scorePct");
const quizStartEl = document.querySelector(".start");
const resetBtn = document.querySelector(".scoreArea button");

let currentQuestion = 0;
let correctAnswers = 0;
let resetTimeout = null;

function showQuestion() {
   const currentQuizQuestion = questions[currentQuestion];

   if (currentQuizQuestion) {
      const progressPercentage = Math.floor(
         (currentQuestion / questions.length) * 100,
      );
      progressBarEl.style.width = `${progressPercentage}%`;

      scoreAreaEl.style.display = "none";
      questionAreaEl.style.display = "block";

      questionTitleEl.innerHTML = currentQuizQuestion.question;

      const letters = ["A", "B", "C", "D"];
      optionsContainerEl.innerHTML = currentQuizQuestion.options
         .map(
            (option, index) => `
            <div data-op="${index}" class="option">
               <span>${letters[index]}</span>${option}
            </div>
         `,
         )
         .join("");

      document.querySelectorAll(".options .option").forEach((item) => {
         item.addEventListener("click", handleOptionClick);
      });
   } else {
      finishQuiz();
   }
}

function handleOptionClick(event) {
   const clickedOption = parseInt(
      event.currentTarget.getAttribute("data-op"),
      10,
   );

   if (questions[currentQuestion].answer === clickedOption) {
      correctAnswers++;
   }

   currentQuestion++;
   showQuestion();
}

function finishQuiz() {
   const totalPoints = Math.floor((correctAnswers / questions.length) * 100);

   if (totalPoints <= 50) {
      scoreText1El.innerHTML = "Precisa melhorar!";
      scorePctEl.style.color = "#ff4d4d";
   } else if (totalPoints < 70) {
      scoreText1El.innerHTML = "Muito bom!";
      scorePctEl.style.color = "#ffdb4d";
   } else {
      scoreText1El.innerHTML = "Parabéns!";
      scorePctEl.style.color = "#2ecc71";
   }

   scorePctEl.style.textShadow = "0px 5px 5px rgba(0, 0, 0, 0.3)";
   scorePctEl.innerHTML = `Acertou ${totalPoints}%`;
   scoreText2El.innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

   questionAreaEl.style.display = "none";
   scoreAreaEl.style.display = "block";
   progressBarEl.style.width = "100%";

   resetTimeout = setTimeout(resetQuiz, 7000);
}

function resetQuiz() {
   if (resetTimeout) clearTimeout(resetTimeout);

   questionAreaEl.style.display = "none";
   scoreAreaEl.style.display = "none";

   if (quizStartEl) {
      quizStartEl.innerHTML = "Início de jogo";
      quizStartEl.classList.add("piscar");
   }

   currentQuestion = 0;
   correctAnswers = 0;

   setTimeout(() => {
      if (quizStartEl) {
         quizStartEl.classList.remove("piscar");
      }
      showQuestion();
   }, 3000);
}

resetBtn.addEventListener("click", resetQuiz);

resetQuiz();
