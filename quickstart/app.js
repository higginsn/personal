class QuizApp {
  constructor() {
    this.currentQuestionIndex = 0;
    this.scores = this.initializeScores();
    this.answerHistory = [];
    this.questions = [];
    this.quizLength = 0;
    this.init();
  }

  initializeScores() {
    const scores = {};
    Object.values(AJAHS).forEach(ajah => {
      scores[ajah] = 0;
    });
    return scores;
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  init() {
    this.showIntro();
    document.getElementById('start-btn').addEventListener('click', () => {
      const count = CONFIG.testMode ? CONFIG.testQuestionCount : CONFIG.quizLength;
      this.startQuiz(count);
    });
    document.getElementById('restart-btn').addEventListener('click', () => {
      this.restart();
    });
    document.getElementById('back-btn').addEventListener('click', () => {
      this.goBack();
    });
  }

  showIntro() {
    document.getElementById('intro-screen').classList.remove('hidden');
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.add('hidden');
  }

  startQuiz(length) {
    this.currentQuestionIndex = 0;
    this.scores = this.initializeScores();
    this.answerHistory = [];
    this.quizLength = length;
    this.questions = this.selectRandomQuestions(length);
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    this.renderQuestion();
  }

  selectRandomQuestions(count) {
    const shuffled = this.shuffleArray([...QUESTIONS]);
    return shuffled.slice(0, count);
  }

  renderQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;

    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('question-number').textContent = 
      `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    document.getElementById('question-text').textContent = question.question;

    const backBtn = document.getElementById('back-btn');
    backBtn.classList.remove('hidden');

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    if (question.type === 'image') {
      answersContainer.className = 'answers image-answers';
      this.renderImageAnswers(question.answers, answersContainer);
    } else if (question.type === 'binary') {
      answersContainer.className = 'answers binary-answers';
      this.renderStandardAnswers(question.answers, answersContainer);
    } else {
      answersContainer.className = 'answers';
      this.renderStandardAnswers(question.answers, answersContainer);
    }
  }

  renderStandardAnswers(answers, container) {
    answers.forEach((answer) => {
      const button = document.createElement('button');
      button.className = 'answer-btn';
      button.textContent = answer.text;
      button.addEventListener('click', () => this.handleAnswer(answer.weights));
      container.appendChild(button);
    });
  }

  renderImageAnswers(answers, container) {
    answers.forEach((answer) => {
      const button = document.createElement('button');
      button.className = 'answer-btn image-answer-btn';
      
      const img = document.createElement('img');
      img.src = `images/${answer.image}`;
      img.alt = answer.text;
      img.className = 'answer-image';
      
      const label = document.createElement('div');
      label.className = 'image-answer-label';
      label.textContent = answer.text;
      
      button.appendChild(img);
      button.appendChild(label);
      button.addEventListener('click', () => this.handleAnswer(answer.weights));
      container.appendChild(button);
    });
  }

  handleAnswer(weights) {
    this.answerHistory.push(weights);
    weights.forEach(({ajah, weight}) => {
      this.scores[ajah] += weight;
    });
    
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.renderQuestion();
    } else {
      this.showResults();
    }
  }

  goBack() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      const lastAnswer = this.answerHistory.pop();
      lastAnswer.forEach(({ajah, weight}) => {
        this.scores[ajah] -= weight;
      });
      this.renderQuestion();
    } else {
      this.restart();
    }
  }

  showResults() {
    const totalPoints = this.answerHistory.reduce((sum, weights) => {
      return sum + weights.reduce((weightSum, {weight}) => weightSum + weight, 0);
    }, 0);
    
    const sortedScores = Object.entries(this.scores)
      .map(([ajah, score]) => ({
        ajah,
        score,
        percentage: (score / totalPoints) * 100
      }))
      .sort((a, b) => b.score - a.score);

    const topAjah = sortedScores[0];

    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');

    const resultElement = document.getElementById('result-ajah');
    resultElement.textContent = `${topAjah.ajah} Ajah`;
    resultElement.style.color = AJAH_COLORS[topAjah.ajah];

    const descriptionElement = document.getElementById('ajah-description');
    descriptionElement.textContent = AJAH_DESCRIPTIONS[topAjah.ajah];

    this.renderPieChart(sortedScores);
    this.renderChart(sortedScores);
  }

  renderPieChart(sortedScores) {
    const canvas = document.getElementById('pie-chart');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const filteredScores = sortedScores.filter(s => s.percentage > 0);
    let currentAngle = -Math.PI / 2;

    filteredScores.forEach(({ ajah, percentage }) => {
      const sliceAngle = (percentage / 100) * 2 * Math.PI;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = AJAH_COLORS[ajah];
      ctx.fill();
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      currentAngle += sliceAngle;
    });
  }

  renderChart(sortedScores) {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = '';

    sortedScores.forEach(({ ajah, percentage }) => {
      const barDiv = document.createElement('div');
      barDiv.className = 'chart-bar';

      const label = document.createElement('div');
      label.className = 'chart-label';
      label.textContent = ajah;
      label.style.color = AJAH_COLORS[ajah];

      const barContainer = document.createElement('div');
      barContainer.className = 'chart-bar-container';

      const barFill = document.createElement('div');
      barFill.className = 'chart-bar-fill';
      barFill.style.backgroundColor = AJAH_COLORS[ajah];
      
      setTimeout(() => {
        barFill.style.width = `${percentage}%`;
      }, 100);

      const percentageText = document.createElement('div');
      percentageText.className = 'chart-percentage';
      percentageText.textContent = `${percentage.toFixed(0)}%`;

      barContainer.appendChild(barFill);
      barDiv.appendChild(label);
      barDiv.appendChild(barContainer);
      barDiv.appendChild(percentageText);
      chartContainer.appendChild(barDiv);
    });
  }

  restart() {
    this.currentQuestionIndex = 0;
    this.scores = this.initializeScores();
    this.answerHistory = [];
    this.showIntro();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new QuizApp();
});