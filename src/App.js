import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import RenderHtml from "./pages/RenderHtml";
import RenderDoc from "./pages/RenderDoc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/report" element={<Report/>}/>
        <Route path="/htmlReport" element={<RenderHtml/>}/>
        <Route path="/docReport" element={<RenderDoc/>}/>
      </Routes>
    </Router>
  );
}

export default App;
