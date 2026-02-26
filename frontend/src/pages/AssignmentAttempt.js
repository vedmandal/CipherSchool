import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import api from "../services/api";

import QuestionPanel from "../components/QuestionPanel";
import DataViewer from "../components/DataViewer";
import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import HintBox from "../components/HintBox";

function AssignmentAttempt() {
  const { id } = useParams();

  const [assignment, setAssignment] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [hint, setHint] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [isHintLoading, setIsHintLoading] = useState(false);

  useEffect(() => {
    api.get(`/assignments/${id}`)
      .then(res => setAssignment(res.data))
      .catch(err => console.error(err));
  }, [id]);


  const executeQuery = async () => {
    if (!query.trim()) return;

    setIsExecuting(true);
    setResult(null);

    try {
      const res = await api.post("/execute", {
        assignmentId: id,
        query,
      });
      setResult(res.data);
    } catch (err) {
      setResult({ error: err.response?.data?.error || "Something went wrong" });
    } finally {
      setIsExecuting(false);
    }
  };

 
  const getHint = async () => {
    if (!assignment) return;

    setIsHintLoading(true);
    setHint("");

    try {
      const res = await api.post("/hint", {
        question: assignment.description,
        schema: assignment.schemaInfo,
        userQuery: query,
      });
      setHint(res.data.hint);
    } catch (err) {
      console.error(err);
    } finally {
      setIsHintLoading(false);
    }
  };


  if (!assignment) {
    return <Loader />;
  }

  return (
    <div className="assignment-attempt">

    <div className="section-card">
      <QuestionPanel question={assignment.description} />
    </div>

    <div className="section-card">
      <DataViewer schema={assignment.schemaInfo} />
    </div>

    <div className="section-card">
      <SqlEditor query={query} setQuery={setQuery} />
    </div>

    <button
      className="button button--primary"
      onClick={executeQuery}
      disabled={isExecuting}
    >
      {isExecuting ? "Executing..." : "Execute"}
    </button>

    {result && (
      <div className="section-card">
        <ResultTable result={result} />
      </div>
    )}

    <button
      className="button button--secondary"
      onClick={getHint}
      disabled={isHintLoading}
    >
      {isHintLoading ? "Generating Hint..." : "Get Hint"}
    </button>

    {hint && (
      <div className="section-card">
        <HintBox hint={hint} />
      </div>
    )}

  </div>
  );
}

export default AssignmentAttempt;