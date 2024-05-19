import { useState } from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NewCart from "./components/NewCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/cart" element={<NewCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
