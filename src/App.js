import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backpack from "./pages/backpack/Backpack";

import Home from "./pages/Home";
import Products from "./pages/Products.js";

  



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path= "/" index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="backpack" element={<Backpack/>} />

          
          
        
      </Routes>
    </BrowserRouter>
  );
}


