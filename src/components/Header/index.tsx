import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import brasilflag from "../../assets/flags/brasil.png";
import euaflag from "../../assets/flags/eua.png";
import spainflag from "../../assets/flags/spain.webp";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  language: "pt" | "en" | "es";
  setLanguage: React.Dispatch<React.SetStateAction<"pt" | "en" | "es">>;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: "pt" | "en" | "es") => setLanguage(lang);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <h2 onClick={() => (window.location.href = "/")} className={styles.titulo}>
        GS.
      </h2>

      {/* Links desktop */}
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#home">{language === "pt" ? "Início" : language === "en" ? "Home" : "Inicio"}</a></li>
          <li><a href="#about">{language === "pt" ? "Sobre mim" : language === "en" ? "About" : "Sobre mí"}</a></li>
          <li><a href="#experiencia">{language === "pt" ? "Experiência" : language === "en" ? "Experience" : "Experiencia"}</a></li>
          <li><a href="#habilidades">{language === "pt" ? "Habilidades" : language === "en" ? "Skills" : "Habilidades"}</a></li>
          <li><a href="#projects">{language === "pt" ? "Projetos" : language === "en" ? "Projects" : "Proyectos"}</a></li>
          <li><a href="#certificates">{language === "pt" ? "Certificados" : language === "en" ? "Certificates" : "Certificados"}</a></li>
          <li><a href="#contact">{language === "pt" ? "Contato" : language === "en" ? "Contact" : "Contacto"}</a></li>
        </ul>
      </nav>

      <div className={styles.rightSide}>
        {/* Flags */}
        <ul className={styles.flags}>
          <li>
            <img src={brasilflag} alt="Português"
              onClick={() => handleLanguageChange("pt")}
              style={{ cursor: "pointer", opacity: language === "pt" ? 1 : 0.4 }}
            />
          </li>
          <li>
            <img src={euaflag} alt="English"
              onClick={() => handleLanguageChange("en")}
              style={{ cursor: "pointer", opacity: language === "en" ? 1 : 0.4 }}
            />
          </li>
          <li>
            <img src={spainflag} alt="Español" className={styles.spainFlag}
              onClick={() => handleLanguageChange("es")}
              style={{ cursor: "pointer", opacity: language === "es" ? 1 : 0.4 }}
            />
          </li>
        </ul>

        {/* Botão hamburguer */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" onClick={closeMenu}>{language === "pt" ? "Início" : language === "en" ? "Home" : "Inicio"}</a>
          <a href="#about" onClick={closeMenu}>{language === "pt" ? "Sobre mim" : language === "en" ? "About" : "Sobre mí"}</a>
          <a href="#habilidades" onClick={closeMenu}>{language === "pt" ? "Habilidades" : language === "en" ? "Skills" : "Habilidades"}</a>
          <a href="#projects" onClick={closeMenu}>{language === "pt" ? "Projetos" : language === "en" ? "Projects" : "Proyectos"}</a>
          <a href="#certificates" onClick={closeMenu}>{language === "pt" ? "Certificados" : language === "en" ? "Certificates" : "Certificados"}</a>
          <a href="#contact" onClick={closeMenu}>{language === "pt" ? "Contato" : language === "en" ? "Contact" : "Contacto"}</a>
        </div>
      )}
    </header>
  );
}