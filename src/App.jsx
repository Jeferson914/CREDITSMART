import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Simulador from "./pages/Simulador";
import Solicitud from "./pages/Solicitud";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/solicitud" element={<Solicitud />} />
        </Routes>
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
          © 2025 CreditSmar. Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
}
