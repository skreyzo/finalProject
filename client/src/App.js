import "./App.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import { Join } from "./components/Join/Join";
import News from "./components/News/News";
import Events from "./components/Events/Events";
import Education from "./components/Education/Education";
import Donate from "./components/Donate/Donate";
import Admin from "./components/Admin/Admin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/join" element={<Join />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/education" element={<Education />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/admin" element={<Admin />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
