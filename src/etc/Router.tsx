import { Routes, Route } from "react-router-dom";
import Display from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

function Router() {
  return (
    <Routes>
      <Route element={<Display />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default Router;
