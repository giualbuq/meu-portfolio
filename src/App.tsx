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


function App() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  return (
    <div>
      <Header language={language} setLanguage={setLanguage}></Header>
      <Inicio language={language}></Inicio>
      <SobreMim language={language}></SobreMim>
      <Hability language={language}></Hability>
      <ProjectSection language={language}></ProjectSection>
      <Contato language={language}></Contato>
      <Footer language={language}></Footer>
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
  );
}

export default App;
