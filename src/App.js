import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScreenSize from "./components/screenSize";
import NavBar from "./components/navBar";
import Dropdown from "./components/Dropdown";
import MarginPadding from "./components/MarginPadding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<ScreenSize />}></Route>
          <Route path="dropdown" element={<Dropdown />}></Route>
          <Route path="boxsize" element={<MarginPadding />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
