import styles from "./styles.module.css";

import clanguage from "../../assets/skills/c.png";
import css from "../../assets/skills/css.png";
import figma from "../../assets/skills/figma.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/socialmedia/github.png";
import sharepoint from "../../assets/skills/hsarepoint.png";
import html from "../../assets/skills/html.webp";
import java from "../../assets/skills/java.webp";
import javascript from "../../assets/skills/javascript.png";
import powerapps from "../../assets/skills/powerapps.png";
import powerautomate from "../../assets/skills/powerautomate.png";
import react from "../../assets/skills/react.png";
import sql from "../../assets/skills/sql.png";
import typescript from "../../assets/skills/typescript.png";
import vscode from "../../assets/skills/vscode.png";
import wordpress from "../../assets/skills/wordpress.png";

interface HabilityProps {
  language: "pt" | "en" | "es";
}

export function Hability({ language }: HabilityProps) {
  return (
    <div className={styles.section} id="habilidades">
      <h1 className={styles.habilityTitle}>
        {language === "pt" ? "Habilidades" : language === "en" ? "Skills" : "Habilidades"}
      </h1>

      <div className={styles.container}>
        <div className={styles.card}>
          <h4>
            {language === "pt" ? "Linguagens de Programação" : language === "en" ? "Programming Languages" : "Lenguajes de Programación"}
          </h4>
          <div className={styles.habilities}>
            <p><img src={javascript} alt="JavaScript" /> JavaScript</p>
            <p><img src={java} alt="Java" /> Java</p>
            <p><img src={clanguage} alt="C" /> C</p>
            <p><img src={typescript} alt="TypeScript" /> TypeScript</p>
          </div>
        </div>

        <div className={styles.card}>
          <h4>
            {language === "pt" ? "Desenvolvimento Web" : language === "en" ? "Web Development" : "Desarrollo Web"}
          </h4>
          <div className={styles.habilities}>
            <p><img src={react} alt="React" /> React</p>
            <p><img src={html} alt="HTML" /> HTML</p>
            <p><img src={css} alt="CSS" /> CSS</p>
            <p><img src={wordpress} alt="WordPress" /> WordPress</p>
          </div>
        </div>

        <div className={styles.card}>
          <h4>
            {language === "pt" ? "Ferramentas" : language === "en" ? "Tools" : "Herramientas"}
          </h4>
          <div className={styles.habilities}>
            <p><img src={git} alt="Git" /> Git</p>
            <p><img src={github} alt="GitHub" /> GitHub</p>
            <p><img src={figma} alt="Figma" /> Figma</p>
            <p><img src={vscode} alt="VS Code" /> VS Code</p>
          </div>
        </div>

        <div className={styles.card}>
          <h4>
            {language === "pt" ? "Outras Tecnologias" : language === "en" ? "Other Technologies" : "Otras Tecnologías"}
          </h4>
          <div className={styles.habilities}>
            <p><img src={powerautomate} alt="Power Automate" /> Power Automate</p>
            <p><img src={powerapps} alt="Power Apps" /> Power Apps</p>
            <p><img src={sharepoint} alt="SharePoint" /> SharePoint</p>
            <p><img src={sql} alt="SQL" /> SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
