import React from 'react'


function refreshPage() {
  window.location.reload(false);
}


const ResultPage = ({ score, questions}) => {
  return (
    <div >
      <div className='quiz-result'>
        Problem: {questions} / 10 &nbsp; | &nbsp; Result: {score} 
      </div>
      
      <button className = "main--button" onClick={refreshPage} >Start Over</button>
        </div>
  );
};

export default ResultPage;