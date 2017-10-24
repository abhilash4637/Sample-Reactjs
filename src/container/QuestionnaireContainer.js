import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Questionnaire from '../component/Questionnaire'
import {submitAnswer, switchQuestion, calculateTotalPercentage } from  '../actions/actions'
class QuestionnaireContainer extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <Questionnaire {...this.props} />
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        questions: state.questionnaire.questions,
        answeredList: state.questionnaire.answeredList,
        currentQuestion: state.questionnaire.currentQuestion,
        totalPercentage: state.questionnaire.totalPercentage
    }

}
const mapDispatchToProps = dispatch => bindActionCreators({
    submitAnswer,
    switchQuestion,
    calculateTotalPercentage

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionnaireContainer)
