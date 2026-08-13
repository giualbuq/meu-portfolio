import styles from "./styles.module.css";

interface ExperienciaProps {
  language: "pt" | "en" | "es";
}

export function Experiencia({ language }: ExperienciaProps) {
  return (
    <section className={styles.container} id="experiencia">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.titleNum}>02.</span>
          {language === "pt" ? "Experiência" : language === "en" ? "Experience" : "Experiencia"}
        </h2>

        <div className={styles.timeline}>

          <div className={styles.item}>
            <div className={styles.spine}>
              <div className={styles.dot} />
            </div>
            <div className={styles.body}>
              <span className={styles.role}>
                {language === "pt" ? "Estagiária de Desenvolvimento de Sistemas" : language === "en" ? "Systems Development Intern" : "Becaria en Desarrollo de Sistemas"}
              </span>
              <span className={styles.company}>K2M Soluções - Remoto</span>
              <span className={styles.period}>
                {language === "pt" ? "JAN/2025 — Atual" : language === "en" ? "JAN/2025 — Present" : "ENE/2025 — Presente"}
              </span>
              <ul className={styles.list}>
  <li>
    {language === "pt"
      ? "Desenvolvimento de soluções com Power Platform para automatizar e melhorar processos internos."
      : language === "en"
      ? "Development of Power Platform solutions to automate and improve internal processes."
      : "Desarrollo de soluciones con Power Platform para automatizar y optimizar procesos internos."}
  </li>
  <li>
    {language === "pt"
      ? "Criação e organização de ambientes no SharePoint Online, com foco em usabilidade e estruturação da informação."
      : language === "en"
      ? "Creation and organization of SharePoint Online environments, focusing on usability and information structure."
      : "Creación y organización de entornos en SharePoint Online, con enfoque en usabilidad y estructura de la información."}
  </li>
  <li>
    {language === "pt"
      ? "Participação em projetos ágeis (Scrum), contribuindo na definição de backlog, pontuação de tarefas, dailys e reviews."
      : language === "en"
      ? "Participation in agile (Scrum) projects, contributing to backlog definition, task estimation, dailys, and reviews."
      : "Participación en proyectos ágiles (Scrum), contribuyendo en la definición del backlog, estimación de tareas, reuniones diarias y revisiones."}
  </li>
  <li>
    {language === "pt"
      ? "Análise de demandas e busca por melhorias nas soluções desenvolvidas."
      : language === "en"
      ? "Analysis of requirements and continuous improvement of developed solutions."
      : "Análisis de requerimientos y búsqueda de mejoras en las soluciones desarrolladas."}
  </li>
</ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}