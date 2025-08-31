import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import brasilflag from "../../assets/flags/brasil.png";
import euaflag from "../../assets/flags/eua.png";

interface HeaderProps {
  language: "pt" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"pt" | "en">>;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: "pt" | "en") => setLanguage(lang);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <h2 onClick={() => (window.location.href = "/home")} className={styles.titulo}>
        Giulia<span className={styles.sobrenome}>Albuquerque</span>
      </h2>

      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#home">{language === "pt" ? "Início" : "Home"}</a></li>
          <li><a href="#about">{language === "pt" ? "Sobre mim" : "About"}</a></li>
          <li><a href="#habilidades">{language === "pt" ? "Habilidades" : "Skills"}</a></li>
          <li><a href="#projects">{language === "pt" ? "Projetos" : "Projects"}</a></li>
          <li><a href="#contact">{language === "pt" ? "Contato" : "Contact"}</a></li>
        </ul>
      </nav>

      <nav>
        <ul className={styles.flags}>
          <li>
            <img
              src={brasilflag}
              alt="Português"
              onClick={() => handleLanguageChange("pt")}
              style={{ cursor: "pointer", opacity: language === "pt" ? 1 : 0.5 }}
            />
          </li>
          <li>
            <img
              src={euaflag}
              alt="English"
              onClick={() => handleLanguageChange("en")}
              style={{ cursor: "pointer", opacity: language === "en" ? 1 : 0.5 }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
