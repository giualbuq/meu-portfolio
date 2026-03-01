import styles from "./styles.module.css";

interface ExperienciaProps {
  language: "pt" | "en";
}

export function Experiencia({ language }: ExperienciaProps) {
  return (
    <section className={styles.container} id="experiencia">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.titleNum}>02.</span>
          {language === "pt" ? "Experiência" : "Experience"}
        </h2>

        <div className={styles.timeline}>

          <div className={styles.item}>
            <div className={styles.spine}>
              <div className={styles.dot} />
            </div>
            <div className={styles.body}>
              <span className={styles.role}>
                {language === "pt" ? "Estagiária de Desenvolvimento de Sistemas" : "Systems Development Intern"}
              </span>
              <span className={styles.company}>K2M Soluções - Remoto</span>
              <span className={styles.period}>
                {language === "pt" ? "JAN/2025 — Atual" : "JAN/2025 — Present"}
              </span>
              <ul className={styles.list}>
  <li>
    {language === "pt"
      ? "Desenvolvimento de soluções com Power Platform para automatizar e melhorar processos internos."
      : "Development of Power Platform solutions to automate and improve internal processes."}
  </li>
  <li>
    {language === "pt"
      ? "Criação e organização de ambientes no SharePoint Online, com foco em usabilidade e estruturação da informação."
      : "Creation and organization of SharePoint Online environments, focusing on usability and information structure."}
  </li>
  <li>
    {language === "pt"
      ? "Participação em projetos ágeis (Scrum), contribuindo na definição de backlog, pontuação de tarefas, dailys e reviews."
      : "Participation in agile (Scrum) projects, contributing to backlog definition, task estimation, dailys, and reviews."}
  </li>
  <li>
    {language === "pt"
      ? "Análise de demandas e busca por melhorias nas soluções desenvolvidas."
      : "Analysis of requirements and continuous improvement of developed solutions."}
  </li>
</ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}