import checkAnswers from './checkAnswers.js';

const question1Input = document.getElementById('question1');
const question2Input = document.getElementById('question2');
const question3Input = document.getElementById('question3');
const question4Input = document.getElementById('question4');
const question5Input = document.getElementById('question5');
const result = document.getElementById('score-result');
const button = document.getElementById('submit');

button.addEventListener('click', event => {
    event.preventDefault();
    const question1Answer = question1Input.value.trim();
    const question2Answer = question2Input.value.trim();
    const question3Answer = question3Input.value.trim();
    const question4Answer = question4Input.value.trim();
    const question5Answer = question5Input.value.trim();

    const score = checkAnswers(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);

    const message = 'Your score: ' + score + ' out of 5!';
    
    result.textContent = message;

});