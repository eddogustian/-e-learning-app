import React from "react";

import Navigation from "./components/NavSection";
import Tabs from "./components/TabSection";
import Tentang from "./components/TentangSection";
import Konten from "./components/KontenSection";
import Persyaratan from "./components/PersyaratanSection";
import PembuatKursus from "./components/PembuatKursusSection";
import Ulasan from "./components/UlasanSection";
import Kursus from "./components/KursusLainSection";
import Footer from "./components/FooterSection";
import "./assets/css/normalize.css";
import "./App.css";

const App = () => {
  return (
    <div className="Container">
      <Navigation />
      <Tabs />
      <Tentang />
      <Konten />
      <Persyaratan />
      <PembuatKursus />
      <Ulasan />
      <Kursus />
      <Footer />
    </div>
  );
};

export default App;
