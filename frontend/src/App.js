import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentList from "./pages/AssignmentList";
import AssignmentAttempt from "./pages/AssignmentAttempt";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<AssignmentList />} />
      <Route path="/attempt/:id" element={<AssignmentAttempt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;