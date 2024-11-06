const questions = [
    { question: "Apa warna langit?", options: ["a. Biru", "b. Hijau", "c. Merah", "d. Kuning"], answer: "a. Biru" },
    { question: "Berapa jumlah kaki laba-laba?", options: ["a. 6", "b. 8", "c. 10", "d. 12"], answer: "b. 8" },
    { question: "Siapa presiden pertama Indonesia?", options: ["a. Joko Widodo", "b. Soekarno", "c. BJ Habibie", "d. Soeharto"], answer: "b. Soekarno" },
    { question: "Ibu kota Indonesia?", options: ["a. Jakarta", "b. Surabaya", "c. Bandung", "d. Bali"], answer: "a. Jakarta" },
    { question: "Berapa hasil dari 2 + 2?", options: ["a. 3", "b. 4", "c. 5", "d. 6"], answer: "b. 4" }
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const questionNumberElement = document.getElementById("question-number");

    if (currentQuestionIndex < questions.length) {
            questionElement.textContent = questions[currentQuestionIndex].question;
            questionNumberElement.textContent = currentQuestionIndex + 1;

            optionsElement.innerHTML = "";
            questions[currentQuestionIndex].options.forEach(option => {
                const button = document.createElement("button");
                button.textContent = option;
                button.onclick = () => {
                    checkAnswer(option);
                };
                optionsElement.appendChild(button);
            });
            resetTimer();
        } else {
            nextQuestion()
        }
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score += 20;
        alert("Jawaban benar!, score = +20");
    } else {
        alert(`Jawaban salah. Jawaban yang benar adalah: ${correctAnswer}, score = +0`);
    }

    currentQuestionIndex++;
    loadQuestion();

}

function endQuiz() {
    document.querySelector(".quiz-container").innerHTML = `<h2>Terima kasih sudah mengikuti kuis!</h2><p>Skor akhir Anda adalah: ${score}</p>`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz()
    }
}

function resetTimer() {
    timeLeft = 10;
    document.getElementById("timer").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

loadQuestion();
