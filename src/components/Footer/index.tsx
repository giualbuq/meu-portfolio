import styles from './styles.module.css';

import github from '../../assets/socialmedia/github.png';
import instragram from '../../assets/socialmedia/instagram_icon.png';
import linkedin from '../../assets/socialmedia/LinkedIn_icon.svg.png';

interface FooterProps {
  language: "pt" | "en";
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.logo}>GiuliaAlbuquerque</h2>

      <div className={styles.socials}>
        <a href={"https://github.com/giualbuq"} target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://instagram.com/giiuliaff" target="_blank" rel="noopener noreferrer">
          <img src={instragram} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/giuliaf-albuquerque" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>

      <p>
        {language === "pt"
          ? "© 2025 Giulia Albuquerque. Todos os direitos reservados."
          : "© 2025 Giulia Albuquerque. All rights reserved."}
      </p>
    </footer>
  );
}
