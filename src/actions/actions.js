import * as types from '../constants';

export const submitAnswer = (val) => {
    console.log(val)
    return (dispatch, getState) => {
        let answeredList = getState().questionnaire.answeredList;
        let flag = false;
        answeredList.forEach((answer, i) => {
             if(answer.questionId === val.questionId){
                 answeredList[i] = val;
                 flag = true;
             }
        })
        if(!flag){
            answeredList.push(val);
        }

        let questionId = val.questionId + 1;
        if(val.questionId  === 3){
             questionId = val.questionId
        }

        dispatch({
            type: types.SUBMIT_ANSWER,
            answeredList: answeredList,
            currentQuestion:questionId
        })
    }
}


export const switchQuestion = (direction) => {
    return (dispatch, getState) => {
        let currentQuestion = getState().questionnaire.currentQuestion;
        if(direction === 'prev') {
            currentQuestion--;
        }else{
            currentQuestion++;
        }
        console.log(currentQuestion)
        dispatch({
            type: types.SWITCH_QUE,
            currentQuestion: currentQuestion
        })
    }
}

export const calculateTotalPercentage = () => {
    return (dispatch, getState) => {
        let answeredList = getState().questionnaire.answeredList;
        var sum = 0;
        console.log('54', answeredList)
        for( var i = 0; i < answeredList.length; i++ ){
            sum += parseInt( answeredList[i].correctness, 10 );

        }

        var avg = sum/answeredList.length;
        console.log(avg)
        dispatch({
            type: types.SUM_CALC,
            totalPercentage: avg
        })
    }
}