import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AIChatbot from "./components/AIChatbot";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"
import Certificates from "./pages/Certificates";

export default function App() {

  return (

    <HashRouter>

      {/* NAVBAR */}
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
         <Route path="/certificates" element={<Certificates />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

       {/* AI CHATBOT */}
      <AIChatbot />


    </HashRouter>

  )

}