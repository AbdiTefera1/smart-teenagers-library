import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BrowseBooks from "./pages/BrowseBooks";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
