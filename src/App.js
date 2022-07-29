import "./App.css"
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Project />} path="/projects"></Route>
          <Route element={<ProjectDisplay />} path="/project/:id"></Route>
          <Route element={<Experience />} path="/experience"></Route>
          <Route element={<ContactMe />} path="/call_to-action"></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
