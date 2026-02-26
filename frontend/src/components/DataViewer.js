function DataViewer({ schema }) {
    return (
      <div className="data-viewer">
      <h3 className="section-title">Schema</h3>
        <pre>{schema}</pre>
      </div>
    );
  }
  
  export default DataViewer;