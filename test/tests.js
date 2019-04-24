const test = QUnit.test;

import checkAnswers from '../src/checkAnswers.js';

test('return a score of 5 if all 5 answers are correct', assert => {
    //arrange
    const question1Answer = 'breach';
    const question2Answer = 'jaws';
    const question3Answer = 'headbutt';
    const question4Answer = '700';
    const question5Answer = 'no';
    const expectedResult = 5;
    //act
    const score = checkAnswers(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);  
    //assert
    assert.equal(expectedResult, score);
});

test('return a score of 0 if all 5 answers are wrong', assert => {
    //arrange
    const question1Answer = 'jump';
    const question2Answer = 'bite';
    const question3Answer = 'lick';
    const question4Answer = '600';
    const question5Answer = 'yes';    
    const expectedResult = 0;
    //act
    const score = checkAnswers(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);  
    //assert
    assert.equal(expectedResult, score);
});