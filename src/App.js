import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Hotel from "./pages/Hotel";
import Cabins from "./pages/Cabins";
import NotFound from "./pages/NotFound";

// Routing function for filter items
function ChooseComponent() {
  const { id } = useParams();

  if (id === "hotels") {
    return <Hotel />;
  } else if (id === "cabins") {
    return <Cabins />;
  } else {
    return <NotFound />;
  }
}

// App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/:id" element={<ChooseComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
