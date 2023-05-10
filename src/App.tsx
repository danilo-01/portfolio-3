import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Layout from "./layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
