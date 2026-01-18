import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-color", "color", "text-color", "background-color"],
    correctAnswer: 1
  },
  {
    question: "Which JavaScript keyword is block scoped?",
    options: ["var", "static", "let", "const"],
    correctAnswer: 2
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: 1
  },
  {
    question: "React is a ___?",
    options: ["Framework", "Language", "Library", "Tool"],
    correctAnswer: 2
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="container">
      <h1>React Quiz App</h1>

      {showResult ? (
        <div className="result">
          <h2>Quiz Completed 🎉</h2>
          <p>
            Your Score: <strong>{score}</strong> / {questions.length}
          </p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz">
          <h3>
            Question {currentQuestion + 1} of {questions.length}
          </h3>

          <p className="question">
            {questions[currentQuestion].question}
          </p>

          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="radio"
                name="option"
                value={index}
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              {option}
            </label>
          ))}

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
