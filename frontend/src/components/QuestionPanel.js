function QuestionPanel({ question }) {
    return (
      <div className="question-panel">
        <h2  className="section-title">Question</h2>
        <p>{question}</p>
      </div>
    );
  }
  
  export default QuestionPanel;