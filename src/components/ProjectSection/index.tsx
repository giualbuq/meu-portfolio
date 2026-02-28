import { ProjectCard } from "../ProjectCard";
import styles from "./styles.module.css";

import chronos from "../../assets/projects/chronos.jpg";
import grodavilla from "../../assets/projects/graodavilla.jpg";
import piano from "../../assets/projects/piano.png";
import growgreen from "../../assets/projects/growgreen.jpg";
import gitfind from "../../assets/projects/gitfind.png";
import portifolio from "../../assets/projects/portifolio.png";

interface ProjectSectionProps {
  language: "pt" | "en";
}

export function ProjectSection({ language }: ProjectSectionProps) {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
      <h1 className={styles.myprojectTitle}>
        {language === "pt" ? "Meus Projetos" : "My Projects"}
      </h1>

      <div className={styles.container}>
        <ProjectCard
  imagem={growgreen}
  titulo={"GrowGreen"}
  subtitulo={
    language === "pt"
      ? "Projeto acadêmico que utiliza machine learning para identificar doenças em plantas a partir do upload de imagens, auxiliando no diagnóstico precoce."
      : "Academic project that uses machine learning to identify plant diseases through image uploads, supporting early diagnosis."
  }
  habilidades={["Android Studio", "Java", "Python", "TensorFlow", "Machine Learning"]}
  linkProjeto={"https://github.com/Ntanzi07/GrowGreen-UPXProject"}
/>
        <ProjectCard
  imagem={grodavilla}
  titulo={"Grão da Villa"}
  subtitulo={
    language === "pt"
      ? "Aplicativo mobile desenvolvido no Android Studio com Java, utilizando Firebase. Focado na experiência do cliente e na gestão de produtos e pedidos."
      : "Mobile application developed in Android Studio using Java, integrated with Firebase. Focused on customer experience and product and order management."
  }
  habilidades={["Android Studio", "Java", "Firebase Auth", "Firebase Realtime Database"]}
  linkProjeto={"https://github.com/giualbuq/GraoDaVilla"}
/>

        <ProjectCard
  imagem={chronos}
  titulo={"Chronos Pomodoro"}
  subtitulo={
    language === "pt"
      ? "Aplicação desenvolvida em React e TypeScript para gerenciamento de ciclos de foco utilizando a técnica Pomodoro."
      : "Application built with React and TypeScript to manage focus cycles using the Pomodoro technique."
  }
  habilidades={["React", "TypeScript", "HTML", "CSS", "State Management"]}
  linkProjeto={"https://chronos-pomodoro-tan.vercel.app/"}
/>

        <ProjectCard
  imagem={piano}
  titulo={"Piano"}
  subtitulo={
    language === "pt"
      ? "Simulador de piano desenvolvido em JavaScript, permitindo tocar melodias diretamente pelo teclado."
      : "Piano simulator developed in JavaScript, allowing users to play melodies directly through the keyboard."
  }
  habilidades={["HTML", "CSS", "JavaScript", "DOM Manipulation"]}
  linkProjeto={"https://piano-simulator-plum.vercel.app/"}
/>

        <ProjectCard
  imagem={gitfind}
  titulo={"Git Find"}
  subtitulo={
    language === "pt"
      ? "Aplicação que consome a API do GitHub para buscar usuários e visualizar seus repositórios e informações de perfil."
      : "Application that consumes the GitHub API to search users and display their repositories and profile information."
  }
  habilidades={["React", "JavaScript", "CSS", "GitHub API", "API Integration"]}
  linkProjeto={"https://git-find-sigma.vercel.app/"}
/>
        <ProjectCard
  imagem={portifolio}
  titulo={language === "pt" ? "Portfólio" : "Portfolio"}
  subtitulo={
    language === "pt"
      ? "Portfólio desenvolvido em React e TypeScript para apresentar meus projetos, habilidades e experiências de forma organizada e responsiva."
      : "Portfolio built with React and TypeScript to showcase my projects, skills, and experience in an organized and responsive way."
  }
  habilidades={["React", "TypeScript", "HTML", "CSS", "Responsive Design"]}
  linkProjeto={"https://giulia-albuquerque-portfolio.vercel.app/"}
/>
      </div>
      </div>
    </section>
  );
}
