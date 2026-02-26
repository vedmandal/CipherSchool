function HintBox({ hint }) {
    if (!hint) return null;
  
    return (
      <div>
        <h2>Hint</h2>
        <p>{hint}</p>
      </div>
    );
  }
  
  export default HintBox;