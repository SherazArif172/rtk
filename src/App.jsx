import { Link, Route, Routes } from "react-router-dom";
import Login from "./_components/Login";
import Dashboard from "./_components/Dashboard";
import SinglePost from "./_components/SinglePost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="single-post" element={<SinglePost />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
