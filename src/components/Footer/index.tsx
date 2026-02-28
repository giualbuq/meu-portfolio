import styles from './styles.module.css';

import github from '../../assets/socialmedia/github.png';
import instragram from '../../assets/socialmedia/instagram.webp';
import linkedin from '../../assets/socialmedia/linkedin.webp';

interface FooterProps {
  language: "pt" | "en";
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.logo}>GiuliaSilva</h2>

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
          ? "© 2026 Giulia Silva. Todos os direitos reservados."
          : "© 2026 Giulia Silva. All rights reserved."}
      </p>
    </footer>
  );
}
