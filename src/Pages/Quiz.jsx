import { useState } from 'react';

const questions = [
  {
    id: 0,
    question: 'O que você preferiria fazer?',
    options: ['Treinar para ser um ninja', 'Treinar para lutar em nome de sua deusa', 'Treinar para lutar contra inimigos mais fortes']
  },
  {
    id: 1,
    question: 'O que você faz no seu tempo livre?',
    options: ['Come Lámen', 'Vai polir sua armadura', 'Treina mais']
  },
  {
    id: 2,
    question: 'Qual animal você gosta mais desses?',
    options: ['Raposa', 'Pégaso', 'Macaco']
  },
  {
    id: 3,
    question: 'Qual dessas cores você gosta mais?',
    options: ['Laranja', 'Vermelho', 'Azul']
  }
  
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [quizResult, setQuizResult] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const optionCounts = selectedOptions.reduce((acc, option) => {
      acc[option] = (acc[option] || 0) + 1;
      return acc;
    }, {});

    const getResult = () => {
        const optionCounts = selectedOptions.reduce((acc, option) => {
          acc[option] = (acc[option] || 0) + 1;
          return acc;
        }, {});
    
        const result = Object.keys(optionCounts).reduce((a, b) => (optionCounts[a] > optionCounts[b] ? a : b));
    
        let Result = '';
        switch (result) {
          case 'Resposta A':
            Result = 'Naruto';
            break;
          case 'Resposta B':
            Result = 'Seiya';
            break;
          case 'Resposta C':
            Result = 'Goku';
            break;
          default:
            Result = 'Resultado genérico baseado nas respostas!';
            break;
        }
    
        return Result;
      };
  };

  return (
    <div className="quiz-page">
      {!showResult ? (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleOptionSelect(option)}>{option}</button>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Próximo</button>
        </>
      ) : (
        <div className="result">
          <h2>Resultado do Quiz</h2>
          <p>O protagonista de anime mais parecido com você é: {getResult()}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
