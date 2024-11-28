const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2
    },
    {
      question: "Who discovered gravity?",
      options: ["Einstein", "Newton", "Galileo", "Tesla"],
      correct: 1
    },
    // Add 8 more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionTitle = document.getElementById("question-title");
  const optionsContainer = document.getElementById("options-container");
  const nextBtn = document.getElementById("next-btn");
  const resultSection = document.getElementById("result-section");
  const resultMessage = document.getElementById("result-message");
  const downloadCert = document.getElementById("download-cert");
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionTitle.textContent = question.question;
    optionsContainer.innerHTML = question.options
      .map(
        (option, index) =>
          `<button onclick="checkAnswer(${index})">${option}</button>`
      )
      .join("");
  }
  
  function checkAnswer(selected) {
    const question = questions[currentQuestion];
    if (selected === question.correct) score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById("quiz-section").classList.add("hidden");
    resultSection.classList.remove("hidden");
    resultMessage.textContent =
      score >= 5
        ? `Congrats! You passed with a score of ${score}/${questions.length}.`
        : `Oops! You scored ${score}/${questions.length}. Better luck next time.`;
  }
  
  downloadCert.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
  
    ctx.fillStyle = "#4caf50";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = "#fff";
    ctx.font = "30px Arial";
    ctx.fillText("Brainrotist Certification", 50, 50);
    ctx.font = "20px Arial";
    ctx.fillText(`Awarded to: [Your Name Here]`, 50, 100);
  
    const link = document.createElement("a");
    link.download = "Brainrotist_Certificate.png";
    link.href = canvas.toDataURL();
    link.click();
  });
  
  // Load the first question
  loadQuestion();
  