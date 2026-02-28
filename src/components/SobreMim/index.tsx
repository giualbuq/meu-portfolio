import styles from "./styles.module.css";
import profilePhoto from "../../assets/profile.jpeg";

interface SobreMimProps {
  language: "pt" | "en";
}

export function SobreMim({ language }: SobreMimProps) {
  return (
    <section className={styles.container} id="about">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.titleNum}>01.</span>
          {language === "pt" ? "Sobre Mim" : "About Me"}
        </h2>

        <div className={styles.grid}>
          <div className={styles.photoWrap}>
            <div className={styles.photoFrame} />
            <img
              className={styles.photo}
              src={profilePhoto}
              alt={language === "pt" ? "Foto de Giulia" : "Photo of Giulia"}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.subtitle}>
              {language === "pt" ? "Quem sou eu?" : "Who am I?"}
            </p>
            <p className={styles.description}>
  {language === "pt"
    ? "Sou estudante de Engenharia da Computação e estou sempre buscando aprender coisas novas. Gosto de desafios e de me desenvolver constantemente, tanto na parte técnica quanto pessoal."
    : "I’m a Computer Engineering student who is always looking to learn new things. I enjoy challenges and constantly work on improving myself, both technically and personally."}
</p>

            <p className={styles.subtitle}>
              {language === "pt" ? "Formação Acadêmica" : "Education"}
            </p>
            <div className={styles.card}>
  <span className={styles.cardTitle}>
    {language === "pt"
      ? "Engenharia da Computação — FACENS"
      : "Computer Engineering — FACENS"}
  </span>
  <span className={styles.cardPeriod}>
    {language === "pt" ? "Jan/2023 — Dez/2027 (Previsão)" : "Jan/2023 — Dec/2027 (Expected)"}
  </span>
</div>

<div className={styles.card}>
  <span className={styles.cardTitle}>
    {language === "pt"
      ? "Ensino Médio — Colégio Ser"
      : "High School — Colégio Ser"}
  </span>
  <span className={styles.cardPeriod}>
    {language === "pt" ? "Concluído em 2022" : "Completed in 2022"}
  </span>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}