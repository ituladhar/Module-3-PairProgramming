let listOfProblems = [];
let shuffleArr = [];
let header = document.querySelector('header');
let text = header.querySelector('p');
let allAnswers = document.querySelectorAll('li');
let problemElement = document.getElementById('problem');
let problemDiv = problemElement.querySelector('div.expression');

/**
     * Utility function to generate a random number based on max
     * @param {number} max
     */
     function getRandomNumber(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      function getRandomNegativeNumber(){
        let num = Math.floor(Math.random() * 10) +1;
        num *= Math.round(Math.random) ? 1: -1;
        return num;

        // let MAX = 30;
        // Random random = new Random(); // Optionally, you can specify a seed, e.g. timestamp.
        // let rand = random.nextInt(MAX) * (random .nextBoolean() ? -1 : 1);
      }

      /**
     * Utility function to shuffle the items in an array
     * @param {object} arr
     */
    function shuffleArray(arr) {
        return arr.sort(function (a, b) { return Math.random() - 0.5 })
      }



      function selectQuestionTypes(){
        text.innerText = "Please choose the Math Operations you would like to practice and click start";
        makeHidden(problemElement);
        let arr = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
        let valArr = ['+', '-', '*', '/'];
        allAnswers.forEach((box, index) => {
            let span = document.createElement('span');
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.value = valArr[index];
            span.innerText = arr[index];
            box.appendChild(input);
            box.appendChild(span);
        })
    }


    function generateQuestions(operatorArr){
        for(let i = 0; i < 10;  i++){
            let problem = {
                leftNum: getRandomNumber(10),
                rightNum: getRandomNumber(10),
                correctAnswer: 0,
                wrongAnswer1: 0,
                wrongAnswer2: 0,
                wrongAnswer3: 0,
                operand: "",
            }

            operator = operatorArr[Math.floor(Math.random() * operatorArr.length)];

            if(operator.includes('+')){
                //9 + 9 = 18
                problem.correctAnswer = problem.leftNum + problem.rightNum;
                problem.wrongAnswer1 = getRandomNumber(18) *3;
                problem.wrongAnswer2 = getRandomNumber(18) *2;
                problem.wrongAnswer3 = getRandomNumber(18);
                problem.operand = '+';
            }

            else if(operator.includes('-')){
                problem.correctAnswer = problem.leftNum - problem.rightNum;
                problem.wrongAnswer1 = getRandomNegativeNumber() * 3;
                problem.wrongAnswer2 = getRandomNegativeNumber() * 2;
                problem.wrongAnswer3 = getRandomNumber(9);
                problem.operand = '-';
            }

            else if(operator.includes('*')){
                problem.correctAnswer = problem.leftNum * problem.rightNum;
                problem.wrongAnswer1 = getRandomNumber(40);
                problem.wrongAnswer2 = getRandomNumber(80);
                problem.wrongAnswer3 = getRandomNumber(70);
                problem.operand = 'x';
            }

            else if(operator.includes('/')){
                problem.leftNum = getRandomNumber(15);
                problem.rightNum = getRandomNumber(10) * problem.leftNum;
                problem.correctAnswer = (problem.leftNum / problem.rightNum).toFixed(2);
                problem.wrongAnswer1 = getRandomNumber(40);
                problem.wrongAnswer2 = (getRandomNumber(40) / getRandomNumber(40)).toFixed(2) ;
                problem.wrongAnswer3 = getRandomNumber(20);
                problem.operand = '÷';
            }

            listOfProblems.push(problem);
        }
    }

    function displayQuestionsAndAnswers(){
        let problemDiv = problemElement.querySelector('div.expression');
        listOfProblems.forEach((problem) =>{
            let problemDisplay = `${problem.leftNum} ${problem.operand} ${problem.rightNum}`;
            problemElement.querySelector('div.expression').innerText = problemDisplay;
            shuffleArr = shuffleArray([problem.correctAnswer, problem.wrongAnswer1, problem.wrongAnswer2, problem.wrongAnswer3]);
            const ul = document.querySelector('ul');

            shuffleArr.forEach((answer) => {
                const li = document.querySelector('li');
            if (answer === problem.correctAnswer){
                li.innerText = problem.correctAnswer;
                li.setAttribute('class', 'correct');
            }else{
                li.innerText = answer;
                li.setAttribute('class', 'wrong');
            }

            ul.appendChild(li);
            })
        })
    }

    function getUserChoice(){
        let values = [];
        let inputs = document.getElementsByTagName("input");

        for(let i=0; i < inputs.length; i++){
            if(inputs[i].type === "checkbox" && inputs[i].checked)
            values.push(inputs[i].value);
        }
        return values;
    }

    function showHidden(element){
        element.classList.remove('hidden');
        element.classList.add('show-hide');
    }

    function makeHidden(element){
        element.classList.remove('show-hide');
        element.classList.add('hidden');
    }
    

    // DOM container Loader 
    document.addEventListener('DOMContentLoaded', () => {
        let operatorArr = [];
        let startBtn = document.querySelector('button');
        startBtn.innerText = 'Start';
        startBtn.classList = 'start';
        selectQuestionTypes();
        
        startBtn.addEventListener('click', () => {
           // e.preventDefault();
            operatorArr = getUserChoice();
            text.innerText = "Please select an answer below the problem by clicking on the box";

            startBtn.innerText = " Start Over";
            startBtn.classList.add("start-over");

            showHidden(problemElement);
            generateQuestions(operatorArr);
            displayQuestionsAndAnswers();
            main();
        });

        function main(){
            let currentProblem = 1;
            let currentScore = 0;

            allAnswers.forEach((answer) => {
                answer.addEventListener('click', (event) =>{
                    event.preventDefault();

                    if(answer.classList.contains('correct')){
                        currentProblem++;
                        currentScore++;
                    }else{
                        currentProblem++;
                    }

                    generateQuestions(operatorArr);
                    displayQuestionsAndAnswers();

                    if(currentProblem > 10){
                        currentProblem = 10;

                        let problemDiv = problemElement.querySelector('div.expression');
                        let answerSection = document.getElementById('answers');

                        makeHidden(text);
                        makeHidden(problemDiv);
                        makeHidden(answerSection);
                    }

                    let score = document.querySelector('span.currentScore');
                    score.innerText = `${currentScore}`;
                    let problemNum = document.querySelector('span.currentProblem');
                    problemNum.innerText = `${currentProblem}`;

                })

            })

            let startOverBtn = document.querySelector('button');
            startOverBtn.addEventListener('click', () => {
                location.reload();
            })
        }
    })