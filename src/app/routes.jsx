import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Contact from "../pages/Contact.jsx";
import Quote from "../pages/Quote.jsx";
import Pricing from "../pages/Pricing.jsx";

function RoutesRoot() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="quote" element={<Quote />} />
      <Route path="pricing" element={<Pricing />} />
    </Routes>
  );
}

export default RoutesRoot;

