import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import brasilflag from "../../assets/flags/brasil.png";
import euaflag from "../../assets/flags/eua.png";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  language: "pt" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"pt" | "en">>;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: "pt" | "en") => setLanguage(lang);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <h2 onClick={() => (window.location.href = "/")} className={styles.titulo}>
        GS.
      </h2>

      {/* Links desktop */}
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#home">{language === "pt" ? "Início" : "Home"}</a></li>
          <li><a href="#about">{language === "pt" ? "Sobre mim" : "About"}</a></li>
          <li><a href="#experiencia">{language === "pt" ? "Experiência" : "Expierence"}</a></li>
          <li><a href="#habilidades">{language === "pt" ? "Habilidades" : "Skills"}</a></li>
          <li><a href="#projects">{language === "pt" ? "Projetos" : "Projects"}</a></li>
          <li><a href="#contact">{language === "pt" ? "Contato" : "Contact"}</a></li>
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
        </ul>

        {/* Botão hamburguer */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" onClick={closeMenu}>{language === "pt" ? "Início" : "Home"}</a>
          <a href="#about" onClick={closeMenu}>{language === "pt" ? "Sobre mim" : "About"}</a>
          <a href="#habilidades" onClick={closeMenu}>{language === "pt" ? "Habilidades" : "Skills"}</a>
          <a href="#projects" onClick={closeMenu}>{language === "pt" ? "Projetos" : "Projects"}</a>
          <a href="#contact" onClick={closeMenu}>{language === "pt" ? "Contato" : "Contact"}</a>
        </div>
      )}
    </header>
  );
}