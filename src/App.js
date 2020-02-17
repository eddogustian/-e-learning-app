import React from "react";

import Navigation from "./components/NavSection";
import Tentang from "./components/TentangSection";
import Konten from "./components/KontenSection";
import Persyaratan from "./components/PersyaratanSection";
import Ulasan from "./components/UlasanSection";
import Kursus from "./components/KursusLainSection";
import Footer from "./components/FooterSection";
import "./App.css";

const App = () => {
  return (
    <div className="Container">
      <Navigation />
      <Tentang />
      <Konten />
      <Persyaratan />
      <Ulasan />
      <Kursus />
      <Footer />
    </div>
  );
};

export default App;
