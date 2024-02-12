import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
}
