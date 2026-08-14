import styles from "./styles.module.css";

import css from "../../assets/skills/css.png";
import dataverse from "../../assets/skills/dataverse.png";
import figma from "../../assets/skills/figma.png";
import firebase from "../../assets/skills/firebase.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/socialmedia/github.png";
import html from "../../assets/skills/html.webp";
import java from "../../assets/skills/java.webp";
import javascript from "../../assets/skills/javascript.png";
import json from "../../assets/skills/json.png";
import machineLearning from "../../assets/skills/machine-learning.png";
import powerapps from "../../assets/skills/powerapps.png";
import powerautomate from "../../assets/skills/powerautomate.png";
import python from "../../assets/skills/python.webp";
import react from "../../assets/skills/react.png";
import restApi from "../../assets/skills/rest-api.jpg";
import sharepoint from "../../assets/skills/hsarepoint.png";
import sql from "../../assets/skills/sql.png";
import tailwind from "../../assets/skills/tailwind.png";
import tensor from "../../assets/skills/tensor.webp";
import typescript from "../../assets/skills/typescript.png";
import vscode from "../../assets/skills/vscode.png";
import claude from "../../assets/skills/claude.png";
import copilot from "../../assets/skills/copilot.png";

interface HabilityProps {
  language: "pt" | "en" | "es";
}

export function Hability({ language }: HabilityProps) {
  const skillGroups = [
    {
      title:
        language === "pt"
          ? "Linguagens de Programação"
          : language === "en"
            ? "Programming Languages"
            : "Lenguajes de Programación",
      items: [
        { image: javascript, label: "JavaScript" },
        { image: typescript, label: "TypeScript" },
        { image: python, label: "Python" },
        { image: java, label: "Java" }
      ],
    },
    {
      title:
        language === "pt"
          ? "Desenvolvimento Web"
          : language === "en"
            ? "Web Development"
            : "Desarrollo Web",
      items: [
        { image: react, label: "React" },
        { image: html, label: "HTML" },
        { image: css, label: "CSS" },
        { image: tailwind, label: "Tailwind" },
      ],
    },
    {
      title:
        language === "pt" ? "Ferramentas" : language === "en" ? "Tools" : "Herramientas",
      items: [
        { image: git, label: "Git" },
        { image: github, label: "GitHub" },
        { image: figma, label: "Figma" },
        { image: vscode, label: "VS Code" },
      ],
    },
    {
      title:
        language === "pt"
          ? "Power Platform"
          : language === "en"
            ? "Power Platform"
            : "Plataforma Power",
      items: [
        { image: powerautomate, label: "Power Automate" },
        { image: powerapps, label: "Power Apps" },
        { image: sharepoint, label: "SharePoint" },
        { image: dataverse, label: "Dataverse" },
      ],
    },
    {
      title:
        language === "pt"
          ? "IA & Machine Learning"
          : language === "en"
            ? "AI & Machine Learning"
            : "IA & Aprendizaje Automático",
      items: [
        { image: machineLearning, label: "Machine Learning" },
        { image: tensor, label: "TensorFlow" },
        { image: claude, label: "Claude Code" },
        { image: copilot, label: "Copilot Studio" },
      ],
    },
    {
      title:
        language === "pt"
          ? "Desenvolvimento & Dados"
          : language === "en"
            ? "Development & Data"
            : "Desarrollo & Datos",
      items: [
        { image: restApi, label: "REST APIs" },
        { image: sql, label: "SQL" },
        { image: json, label: "JSON" },
        { image: firebase, label: "Firebase" },
      ],
    },
  ];

  return (
    <div className={styles.section} id="habilidades">
      <h1 className={styles.habilityTitle}>
        {language === "pt" ? "Habilidades" : language === "en" ? "Skills" : "Habilidades"}
      </h1>

      <div className={styles.container}>
        {skillGroups.map((group) => (
          <div className={styles.card} key={group.title}>
            <h4>{group.title}</h4>
            <div className={styles.habilities}>
              {group.items.map((item) => (
                <p key={item.label}>
                  <img src={item.image} alt={item.label} />
                  {item.label}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
