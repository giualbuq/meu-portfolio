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
                ? "Sou uma pessoa curiosa, dedicada e que gosta de desafios. Gosto de entender como as coisas funcionam, buscar soluções para os problemas e transformar ideias em algo que realmente funcione."
                : language === "en"
                  ? "I am a curious, dedicated person who enjoys challenges. I like to understand how things work, seek solutions to problems, and turn ideas into something that really works."
                  : "Soy una persona curiosa, dedicada y que disfruta de los desafíos. Me gusta entender cómo funcionan las cosas, buscar soluciones a los problemas y convertir ideas en algo que realmente funcione."}
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
