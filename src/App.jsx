import React from "react";
import Page from "./pages/page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
