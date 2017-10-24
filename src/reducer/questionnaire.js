import * as types from '../constants';
const initialState = {
    questions: [
        {
            question:'What is Lorem ipsum ?',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            answers: [
                {
                    questionId: 0,
                    correctness: 100,
                    name: 'Yes'
                },
                {
                    questionId: 0,
                    correctness: 0,
                    name: 'No'
                }
            ]
        },
        {
            question:'Where does it come from ?',
            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
            answers: [
                {
                    questionId: 1,
                    correctness: 10,
                    name: 'Whatever'
                },
                {
                    questionId: 1,
                    correctness: 40,
                    name: 'May be'
                },
                {
                    questionId: 1,
                    correctness: 60,
                    name: 'Hmm ok'
                },
                {
                    questionId: 1,
                    correctness: 100,
                    name: 'Yeah'
                }

            ]
        },
        {
            question:'Why do we use it?',
            text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            answers: [
                {
                    questionId: 2,
                    correctness: 10,
                    name: 'Whatever'
                },
                {
                    questionId: 2,
                    correctness: 40,
                    name: 'May be'
                },
                {
                    questionId: 2,
                    correctness: 60,
                    name: 'Hmm ok'
                },
                {
                    questionId: 2,
                    correctness: 100,
                    name: 'Yeah'
                }

            ]
        },
        {
            question:'Where can I get some?',
            text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            answers: [
                {
                    questionId: 3,
                    correctness: 10,
                    name: 'Whatever'
                },
                {
                    questionId: 3,
                    correctness: 40,
                    name: 'May be'
                },
                {
                    questionId: 3,
                    correctness: 60,
                    name: 'Hmm ok'
                },
                {
                    questionId: 3,
                    correctness: 100,
                    name: 'Yeah'
                }

            ]
        }
    ],
    currentQuestion: 0,
    totalPercentage: 0,
    answeredList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SUBMIT_ANSWER:
            return {
                ...state,
                answeredList: action.answeredList,
            currentQuestion: action.currentQuestion
            }
        case types.SWITCH_QUE:
            return {
                ...state,
              currentQuestion: action.currentQuestion
            }
        case types.SUM_CALC:
            return {
                ...state,
                totalPercentage: action.totalPercentage
            }
        default:
            return state
        }
}