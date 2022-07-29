import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/add/ProductList";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Report from "./pages/report/Report";

function App() {
  return (
    <div  className="main">
      <div className="sidebar">
        <NavBar />
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductList />} />

        </Routes>
      </div>
    </div >
  );
}

export default App;
