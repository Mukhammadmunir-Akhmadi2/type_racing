import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={}/>
        <Route path="/garage" element={}/>
        <Route path="/top-list" element={}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
