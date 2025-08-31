import styles from "./styles.module.css";
import profilePhoto from "../../assets/profile.jpeg";

interface SobreMimProps {
  language: "pt" | "en";
}

export function SobreMim({ language }: SobreMimProps) {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>
        {language === "pt" ? "Sobre Mim" : "About Me"}
      </h1>

      <section className={styles.section}>
        <section className={styles.quemSou}>
          <img
            className={styles.imgInicio}
            src={profilePhoto}
            alt={language === "pt" ? "Foto de Giulia" : "Photo of Giulia"}
          />

          <div>
            <p className={styles.subtitle}>
              {language === "pt" ? "Quem sou eu?" : "Who am I?"}
            </p>
            <p className={styles.description}>
              {language === "pt"
                ? "Sou estudante do sexto semestre de Engenharia da Computação e tenho grande interesse por tecnologia e seus desafios, sempre buscando oportunidades para crescer, aprender e contribuir na área."
                : "I am a sixth-semester Computer Engineering student with a strong interest in technology and its challenges, always seeking opportunities to grow, learn, and contribute in the field."}
            </p>

            <p className={styles.subtitle}>
              {language === "pt" ? "Formação Acadêmica" : "Education"}
            </p>
            <p className={styles.description}>
              <b>{language === "pt" ? "Engenharia da Computação - FACENS Sorocaba" : "Computer Engineering - FACENS Sorocaba"}</b>
              <br />
              {language === "pt" ? "JAN/2023 - DEZ/2027" : "JAN/2023 - DEC/2027"}
            </p>
            <p className={styles.description}>
              <b>{language === "pt" ? "Curso de Inglês - Happy&Co Sorocaba" : "English Course - Happy&Co Sorocaba"}</b>
              <br />
              {language === "pt" ? "JAN/2019 - DEZ/2022" : "JAN/2019 - DEC/2022"}
            </p>
          

            <p className={styles.subtitle}>
              {language === "pt" ? "Experiência" : "Experience"}
            </p>
            <p className={styles.description}>
              <b>{language === "pt" ? "K2M Soluções - Estágio" : "K2M Solutions - Internship"}</b>
              <p>{language === "pt" ? "JAN/2025 - Atual" : "JAN/2025 - Present"}</p>
              <br />
              <ul>
                <li>
                  {language === "pt"
                    ? "Desenvolvimento de soluções com Power Platform para automatizar processos."
                    : "Developed solutions with Power Platform to automate processes."}
                </li>
                <li>
                  {language === "pt"
                    ? "Criação de páginas no SharePoint, focando na experiência dos usuários."
                    : "Created SharePoint pages, focusing on user experience."}
                </li>
                <li>
                  {language === "pt"
                    ? "Aprendizado contínuo por meio do desenvolvimento de soluções automatizadas."
                    : "Continuous learning through the development of automated solutions."}
                </li>
              </ul>
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
