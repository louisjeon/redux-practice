import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Deatil from "../routes/Deatil";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" element={<Deatil />} />
      </Routes>
    </Router>
  );
}

export default App;
