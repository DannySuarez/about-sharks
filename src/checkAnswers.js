function checkAnswers(question1Answer, question2Answer, question3Answer, question4Answer, question5Answer) {
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

export default checkAnswers;