import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { SobreMim } from "./components/SobreMim";
import { ProjectSection } from "./components/ProjectSection";
import { Hability } from "./components/Hability";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Experiencia } from "./components/Experiencia";

function App() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse 60% 60% at 80% 10%, rgba(168,85,247,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 10% 80%, rgba(236,72,153,0.06) 0%, transparent 60%)
        `
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header language={language} setLanguage={setLanguage} />
        <Inicio language={language} />
        <SobreMim language={language} />
        <Experiencia language={language} />
        <Hability language={language} />
        <ProjectSection language={language} />
        <Contato language={language} />
        <Footer language={language} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </div>
    </div>
  );
}

export default App;