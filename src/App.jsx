import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { OnlyPage } from "./pages/OnlyPage";
import { ElectronicsPage } from "./pages/ElectronicsPage";
import { MensClothingPage } from "./pages/MensClothingPage";
import { WomensClothingPage } from "./pages/WomensClothingPage";
import { ProductDetail } from "./components/ProductDetail";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/product/:id" element={<ProductDetail/>} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/products/category/jewelery" element={<OnlyPage />} />
          <Route exact path="/products/category/electronics" element={<ElectronicsPage />} />
          <Route exact path="/products/category/mens-clothing" element={<MensClothingPage />} />
          <Route exact path="/products/category/womens-clothing" element={<WomensClothingPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
