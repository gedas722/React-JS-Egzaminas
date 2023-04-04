import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import ChooseComponent from "./utils/routes";

// App
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Filter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/:id" element={<ChooseComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
