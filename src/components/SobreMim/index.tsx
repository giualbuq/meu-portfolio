import styles from "./styles.module.css";
import profilePhoto from "../../assets/profile.jpeg";

interface SobreMimProps {
  language: "pt" | "en" | "es";
}

export function SobreMim({ language }: SobreMimProps) {
  return (
    <section className={styles.container} id="about">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.titleNum}>01.</span>
          {language === "pt"
            ? "Sobre Mim"
            : language === "en"
              ? "About Me"
              : "Sobre mí"}
        </h2>

        <div className={styles.grid}>
          <div className={styles.photoWrap}>
            <div className={styles.photoFrame} />
            <img
              className={styles.photo}
              src={profilePhoto}
              alt={
                language === "pt"
                  ? "Foto de Giulia"
                  : language === "en"
                    ? "Photo of Giulia"
                    : "Foto de Giulia"
              }
            />
          </div>

          <div className={styles.content}>
            <p className={styles.subtitle}>
              {language === "pt"
                ? "Quem sou eu?"
                : language === "en"
                  ? "Who am I?"
                  : "¿Quién soy?"}
            </p>
            <p className={styles.description}>
              {language === "pt"
                ? "Sou estudante de Engenharia da Computação e estou sempre buscando aprender coisas novas. Gosto de desafios e de me desenvolver constantemente, tanto na parte técnica quanto pessoal."
                : language === "en"
                  ? "I’m a Computer Engineering student who is always looking to learn new things. I enjoy challenges and constantly work on improving myself, both technically and personally."
                  : "Soy estudiante de Ingeniería de Computación y siempre busco aprender cosas nuevas. Me gustan los desafíos y trabajar en mi desarrollo tanto técnico como personal."}
            </p>

            <p className={styles.subtitle}>
              {language === "pt"
                ? "Formação Acadêmica"
                : language === "en"
                  ? "Education"
                  : "Formación Académica"}
            </p>
            <div className={styles.card}>
              <span className={styles.cardTitle}>
                {language === "pt"
                  ? "Engenharia da Computação - FACENS"
                  : language === "en"
                    ? "Computer Engineering - FACENS"
                    : "Ingeniería de Computación - FACENS"}
              </span>
              <span className={styles.cardPeriod}>
                {language === "pt"
                  ? "Jan/2023 — Dez/2027 (Previsão)"
                  : language === "en"
                    ? "Jan/2023 — Dec/2027 (Expected)"
                    : "Ene/2023 — Dic/2027 (Previsto)"}
              </span>
            </div>

            <p className={styles.subtitle}>
              {language === "pt"
                ? "Idiomas"
                : language === "en"
                  ? "Languages"
                  : "Idiomas"}
            </p>
            <div className={styles.langRow}>
              <div className={styles.card}>
                <span className={styles.cardTitle}>
                  {language === "pt"
                    ? "Português - Fluente"
                    : language === "en"
                      ? "Portuguese - Fluent"
                      : "Portugués - Fluente"}
                </span>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>
                  {language === "pt"
                    ? "Inglês - Avançado"
                    : language === "en"
                      ? "English - Advanced"
                      : "Inglés - Avanzado"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
