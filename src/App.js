import { BrowserRouter, Routes, Route } from "react-router-dom";
import Backpack from "./pages/backpack/Home";

import Home from "./pages/Backpack";
import Products from "./pages/Products.js";

  



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path= "/" index element={<Backpack />} />
          <Route path="products" element={<Products />} />
          <Route path="backpack" element={<Home/>} />

          
          
        
      </Routes>
    </BrowserRouter>
  );
}


