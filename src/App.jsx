import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import Whyus from "./components/whyus";
import Cta from "./components/cta";
import Footer from "./components/footer";
import PageBanner from "./components/PageBanner";

import Products from "./Pages/Products";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Whyus />
      <Cta />
    </>
  );
}

function About() {
  return (
    <>
      <PageBanner
        label="Who we are"
        title="About ATS Electro Services"
        subtitle="Authorised channel partners for industrial gas detection and flame detection systems across Mumbai & Maharashtra."
      />
      <Whyus />
    </>
  );
}

function Contact() {
  return (
    <>
      <PageBanner
        label="Get in touch"
        title="Contact Us"
        subtitle="Reach out for installations, AMC, or any safety equipment enquiry. We're available across Mumbai, Navi Mumbai, Thane and Pune."
      />
      <Cta />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;