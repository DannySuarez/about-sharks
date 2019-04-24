const test = QUnit.test;

function checkAnswer(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer) {
    let score = 0;

    if(question1Answer === 'breach') {
        score += 1;
    }

    if(question2Answer === 'jaws') {

        score += 1; 
    }

    if(question3Answer === 'headbutt') {
        score += 1;
    }   

    if(question4Answer === '700') {
        score += 1;
    } 

    if(question5Answer === 'no') {
        score += 1;
    } 

    return score;
}

test('return a score of 5 if all 5 answers are correct', assert => {
    //arrange
    const question1Answer = 'breach';
    const question2Answer = 'jaws';
    const question3Answer = 'headbutt';
    const question4Answer = '700';
    const question5Answer = 'no';
    const expectedResult = 5;
    //act
    const score = checkAnswer(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);  
    //assert
    assert.equal(expectedResult, score);
});

test('return a score of 0 if all 2 answers are wrong', assert => {
    //arrange
    const question1Answer = 'jump';
    const question2Answer = 'bite';
    const question3Answer = 'lick';
    const question4Answer = '600';
    const question5Answer = 'yes';    
    const expectedResult = 0;
    //act
    const score = checkAnswer(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer);  
    //assert
    assert.equal(expectedResult, score);
});