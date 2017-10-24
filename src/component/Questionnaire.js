import React from 'react'

const Questionnaire = ({questions, submitAnswer, currentQuestion, activeQuestion, switchQuestion, totalPercentage, calculateTotalPercentage}) => (
    <div>
        <h1>Questionnaire</h1>
        <div className='content'>
            <div className='wrapper'>
            <div className='carousel-controls'>
            <span className={currentQuestion === 0 ? 'prev disable': 'prev'} onClick={() => switchQuestion('prev')}>Prev</span>
                <span> Step{currentQuestion + 1} of 4</span>
                <span className={currentQuestion === 3 ? 'next disable': 'next'}  onClick={() => switchQuestion('next')}>Next</span></div>
        <div className='carousel-container'>
            <div className={'carousel active' + currentQuestion  }>
        {
            questions.map((question, index) => (
              <div className={index === currentQuestion ? 'active slide': 'slide'} key={index}>
                <h1>{question.question}</h1>
                <p>{question.text}</p>
                  {question.answers.map( (answer, i) => (
                      <button className='btn' onClick={() => submitAnswer(answer)} key={i}>{answer.name}</button>
                  ) )}
              </div>
            ))
        }

                </div></div>
            </div>
        {currentQuestion === 3 && <div className='results'>
            <button className='btn' onClick={() => calculateTotalPercentage()}>Result</button>
            <p> Total: {totalPercentage} % </p>
        </div>}
        </div>
    </div>
)

export default Questionnaire
