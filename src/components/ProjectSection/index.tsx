import { ProjectCard } from "../ProjectCard";
import styles from "./styles.module.css";

import chronos from "../../assets/projects/chronos.jpg";
import calculadora from "../../assets/projects/calculadora.png";
import piano from "../../assets/projects/piano.png";
import memory from "../../assets/projects/memory-game.png";
import gitfind from "../../assets/projects/gitfind.png";
import portifolio from "../../assets/projects/portifolio.png";

interface ProjectSectionProps {
  language: "pt" | "en";
}

export function ProjectSection({ language }: ProjectSectionProps) {
  return (
    <section className={styles.section} id="projects">
      <h1 className={styles.myprojectTitle}>
        {language === "pt" ? "Meus Projetos" : "My Projects"}
      </h1>

      <div className={styles.container}>
        <ProjectCard
          imagem={calculadora}
          titulo={language === "pt" ? "Calculadora" : "Calculator"}
          subtitulo={
            language === "pt"
              ? "Aplicação desenvolvida como estudo em React, uma calculadora funcional capaz de realizar operações matemáticas básicas."
              : "Application developed as a React study project, a functional calculator capable of performing basic mathematical operations."
          }
          habilidades={["HTML", "CSS", "React", "JavaScript"]}
          linkProjeto={"https://calculadora-react-xi-five.vercel.app/"}
        />

        <ProjectCard
          imagem={chronos}
          titulo={language === "pt" ? "Chronos Pomodoro" : "Chronos Pomodoro"}
          subtitulo={
            language === "pt"
              ? "Aplicação desenvolvida como estudo em TypeScript e React, permitindo gerenciar ciclos de trabalho com a técnica Pomodoro."
              : "Application developed as a TypeScript and React study project, allowing management of work cycles using the Pomodoro technique."
          }
          habilidades={["HTML", "CSS", "React", "TypeScript"]}
          linkProjeto={"https://chronos-pomodoro-tan.vercel.app/"}
        />

        <ProjectCard
          imagem={piano}
          titulo={language === "pt" ? "Piano" : "Piano"}
          subtitulo={
            language === "pt"
              ? "Aplicação desenvolvida como estudo em JavaScript, um piano funcional em que é possível tocar melodias pelas teclas."
              : "An application developed as a JavaScript study project, a functional piano where you can play melodies using the keys."
          }
          habilidades={["HTML", "CSS", "JavaScript"]}
          linkProjeto={"https://piano-simulator-plum.vercel.app/"}
        />

        <ProjectCard
          imagem={memory}
          titulo={language === "pt" ? "Jogo da Memória" : "Memory Game"}
          subtitulo={
            language === "pt"
              ? "Aplicação desenvolvida como estudo em JavaScript, um jogo da memória em que o usuário deve combinar pares de cartas iguais."
              : "Application developed as a JavaScript study project, a memory game where the user must match pairs of identical cards."
          }
          habilidades={["HTML", "CSS", "JavaScript"]}
          linkProjeto={"https://memory-game-five-rho.vercel.app/"}
        />

        <ProjectCard
          imagem={gitfind}
          titulo={language === "pt" ? "Git Find" : "Git Find"}
          subtitulo={
            language === "pt"
              ? "Aplicação desenvolvida como estudo em JavaScript, permite buscar usuários do GitHub e visualizar seus repositórios e perfil."
              : "Application developed as a JavaScript study project, allows searching GitHub users and viewing their profile and repositories."
          }
          habilidades={["CSS", "JavaScript", "React", "GitHub API"]}
          linkProjeto={"https://git-find-sigma.vercel.app/"}
        />

        <ProjectCard
          imagem={portifolio} 
          titulo={language === "pt" ? "Portfólio" : "Portfolio"}
          subtitulo={
            language === "pt"
              ? "Aplicação desenvolvida como estudo em React e TypeScript, apresenta meus projetos e habilidades de forma organizada e interativa."
              : "Application developed as a study project in React and TypeScript, showcasing my projects and skills in an organized and interactive way."
          }
          habilidades={["HTML", "CSS", "React", "TypeScript"]}
          linkProjeto={"https://giulia-albuquerque-portfolio.vercel.app/"} 
        />
      </div>
    </section>
  );
}
