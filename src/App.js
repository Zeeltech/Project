import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseS from "./pages/ChooseS";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/chooses" element={<ChooseS></ChooseS>}></Route>
            <Route path="/choosel" element={<ChooseS></ChooseS>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
