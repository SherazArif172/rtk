import { Link, Route, Routes } from "react-router-dom";
import Login from "./_components/Login";
import Dashboard from "./_components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
