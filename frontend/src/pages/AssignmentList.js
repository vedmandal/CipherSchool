import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AssignmentList() {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/assignments")
      .then(res => {
        console.log("Assignments:", res.data);
        setAssignments(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="assignment-list">
      <h2>SQL Assignments</h2>

      {assignments.map((item) => (
        <div key={item._id} className="section-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <button
            className="button button--primary"
            onClick={() => navigate(`/attempt/${item._id}`)}
          >
            Solve
          </button>
        </div>
      ))}
    </div>
  );
}

export default AssignmentList;