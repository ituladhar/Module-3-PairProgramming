import React, { useState } from 'react';
//import { Button } from "reactstrap";

const Main = () => {
  const [currentProblem, setCurrentProblem] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [expression, setExpression] = useState("");
  function mapAnswers(arr) {
    return arr.map((x) => {
      return <button>{x}</button>;
    });
  }
  function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function shuffleArray(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }
  function generateAnswers() {
    const a = getRandomNumber(10);
    const b = getRandomNumber(10);
    const answer = a * b;
    const answerArr = [
      answer,
      getRandomNumber(10),
      getRandomNumber(10),
      getRandomNumber(10),
    ];
    const shuffledAnswers = shuffleArray(answerArr);
    return {
      a: a,
      b: b,
      answer: answer,
      shuffledAnswers: shuffledAnswers,
    };
  }
  const problemObj = generateAnswers();
  const [answers, setAnswers] = useState(
    mapAnswers(problemObj.shuffledAnswers)
  );
//   function makeButton(answers) {
  
//     return (
//         <button 
//             value={answer}
//             onClick={() => onClickFunction(answer.label)}> 
//             answer.name
//         </button>
//     );
// }

  return (
    <main>
      <section id="problem">
        <div className="expression show-hide">
          {problemObj.a + " * " + problemObj.b}
        </div>
        <p>
          Problem: <span className="currentProblem">{currentProblem}</span>/10 |
          Score: <span className="currentScore">{currentScore}</span>
        </p>
      </section>
      <section id="answers" className="show-hide">
        <ul>{answers}</ul>
      </section>
      <button id="btnStartOver">Start Over</button>
    </main>
  );
};

export default Main;