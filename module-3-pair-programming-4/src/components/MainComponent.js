import React, { useState } from "react";
import Option from "./OptionComponent";
import ResultPage from "./ResultPage";
import Score from "./ScoreCalculator";

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function getRandomOptions(question, answer) {
  const options = [
    {
      value: answer,
      selected: false,
      correct: true,
    },
  ];

  while (options.length < question) {
    const value = getRandomInt(10);
    if (!options.find((o) => o.value === value)) {
      options.push({
        value,
        selected: false,
        correct: false,
      });
    }
  }

  return shuffle(options);
}

function MainComponent() {
  const [numCorrect, setNumCorrect] = useState(0);
  const [num1, setNum1] = useState(getRandomInt(10));
  const [num2, setNum2] = useState(getRandomInt(10));
  const [showRestart, setShowRestart] = useState(false);
  const [options, setOptions] = useState(getRandomOptions(4, num1 * num2));
  const [counter, setCounter] = useState(0);

  function next() {
    const nextNum1 = getRandomInt(10);
    const nextNum2 = getRandomInt(10);
    setCounter((countQuestion) => countQuestion + 1);
    setNum1(nextNum1);
    setNum2(nextNum2);
    setOptions(getRandomOptions(4, nextNum1 * nextNum2));
    if (numCorrect === 1) {
      setShowRestart(true);
    }
  }

  function checkAnswer(e) {
    const num = Number(e.target.innerHTML);
    const isCorrect = num1 * num2 === num;
    const countQuestions = () => {
      setCounter((count) => count + 1);
    };

    setOptions(
      options.map((o) => (o.value === num ? { ...o, selected: true } : 0))
    );

    if (isCorrect) {
      setNumCorrect(numCorrect + 1);
      next();
    } else {
      next();
    }
  }

  const optionsList = options.map((opt) => (
    <Option option={opt} onClick={checkAnswer} />
  ));

  return (
    counter < 10 ? 
      <div>
        <div className="main">
        <p>Please select an answer below the problem by clicking the box</p>
          <problem--show>
            {num1} x {num2}
          </problem--show>
          <Score score={Math.max(numCorrect)} questions={counter} />
          <br></br>
          <br></br>
          <div className="options">{optionsList} </div>
          </div> 
      </div>
    
    : <ResultPage score={Math.max(numCorrect)} questions={counter} />

  )
  
    }


export default MainComponent;
