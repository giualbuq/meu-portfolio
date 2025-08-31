import styles from "./styles.module.css";
import logo from "../../assets/logo4.png";

interface InicioProps {
  language: "pt" | "en";
}

export function Inicio({ language }: InicioProps) {
  return (
    <section className={styles.container} id="home">
      <div className={styles["container-inner"]}>
        <div className={styles.content}>
          <p className={styles.title}>
            {language === "pt" ? "Olá, sou a" : "Hi, I'm"} <br />
            Giulia <span className={styles.name}>Albuquerque</span>
          </p>

          <p className={styles.subtitle}>
            {language === "pt"
              ? "Estudante de Engenharia da Computação."
              : "Computer Engineering Student."}
          </p>

          <p className={styles.description}>
            {language === "pt"
              ? "Fascinada por tecnologia e inovação, sempre buscando aprender e desenvolver projetos que façam diferença."
              : "Passionate about technology and innovation, always eager to learn and develop projects that make a difference."}
          </p>

          <div className={styles.buttonSection}>
            <button
              className={styles.buttonCV}
              onClick={() =>
                window.open("../../../public/Currículo.pdf", "_blank")
              }
            >
              {language === "pt" ? "Baixar CV" : "Download CV"}
            </button>
          </div>
        </div>

        <img className={styles.imgInicio} src={logo} alt="Foto de Giulia" />
      </div>
    </section>
  );
}
