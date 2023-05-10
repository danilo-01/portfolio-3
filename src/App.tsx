import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Layout from "./layout";
import About from "./pages/about";
import Projects from "./pages/projects";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
