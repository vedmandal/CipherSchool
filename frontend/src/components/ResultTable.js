function ResultTable({ result }) {
    if (!result) return null;
  
    if (result.error) {
      return <p style={{ color: "red" }}>{result.error}</p>;
    }
  
    const rows = result.rows;
    if (!rows || rows.length === 0) {
      return <p>No results found.</p>;
    }
  
    const columns = Object.keys(rows[0]);
  
    return (
      <div className="result-table">
        <h2>Results</h2>
        <table>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ResultTable;