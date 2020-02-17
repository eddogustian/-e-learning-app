import React from "react";

import Tentang from "./components/TentangSection";
import Konten from "./components/KontenSection";
import Persyaratan from "./components/PersyaratanSection";
import Ulasan from "./components/UlasanSection";
import Header from "./components/HeaderSection";
import "./App.css";

const App = () => {
  return (
    <div className="Container">
      <Header />
      <Tentang />
      <Konten />
      <Persyaratan />
      <Ulasan />
    </div>
  );
};

export default App;
