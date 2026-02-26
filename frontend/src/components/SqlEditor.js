import Editor from "@monaco-editor/react";

function SqlEditor({ query, setQuery }) {
  const handleEditorChange = (value) => {
    setQuery(value || "");
  };

  return (
    <div className="sql-editor">
      <h3 className="section-title">SQL Editor</h3>

      <Editor
        height="300px"
        defaultLanguage="sql"
        value={query}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}

export default SqlEditor;