import { ProjectCard } from "../ProjectCard";
import styles from "./styles.module.css";

import chronos from "../../assets/projects/chronos.jpg";
import grodavilla from "../../assets/projects/graodavilla.jpg";
import growgreen from "../../assets/projects/growgreen.jpg";
import gitfind from "../../assets/projects/gitfind.png";
import facensconnect from "../../assets/projects/facensconnect.jpg";
import vitacare from "../../assets/projects/vitacare.png";

interface ProjectSectionProps {
  language: "pt" | "en" | "es";
}

export function ProjectSection({ language }: ProjectSectionProps) {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
      <h1 className={styles.myprojectTitle}>
        {language === "pt" ? "Meus Projetos" : language === "en" ? "My Projects" : "Mis Proyectos"}
      </h1>

      
      <div className={styles.container}>
        
        <ProjectCard
          imagem={vitacare}
          titulo={"VitaCare"}
          subtitulo={
            language === "pt"
              ? "Plataforma projetada para conectar pacientes e nutricionistas por meio de um cuidado nutricional mais inteligente, organizado e personalizado."
              : language === "en"
              ? "Platform designed to connect patients and nutritionists through smarter, organized, and personalized nutritional care."
              : "Plataforma diseñada para conectar pacientes y nutricionistas a través de una atención nutricional más inteligente, organizada y personalizada."
          }
          habilidades={["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Figma"]}
          linkProjeto={"https://vitacare-five.vercel.app/"}
          language={language}
        />
        <ProjectCard
          imagem={facensconnect}
          titulo={"Facens Connect"}
          subtitulo={
            language === "pt"
              ? "Plataforma acadêmica para gerenciamento e descoberta de eventos universitários na FACENS, com experiências tanto Web quanto Mobile."
              : language === "en"
              ? "Academic platform for managing and discovering university events at FACENS, featuring both Web and Mobile experiences."
              : "Plataforma académica para la gestión y descubrimiento de eventos universitarios en FACENS, con experiencias tanto Web como Móvil."
          }
          habilidades={["React Native", "TypeScript", "Supabase", "Tailwind CSS", "Figma"]}
          linkProjeto={"https://github.com/MandaSoares/Facens-Connect"}
          language={language}
        />
          <ProjectCard
  imagem={growgreen}
  titulo={"GrowGreen"}
  subtitulo={
    language === "pt"
      ? "Projeto acadêmico que utiliza machine learning para identificar doenças em plantas a partir do upload de imagens, auxiliando no diagnóstico precoce."
      : language === "en"
      ? "Academic project that uses machine learning to identify plant diseases through image uploads, supporting early diagnosis."
      : "Proyecto académico que utiliza machine learning para identificar enfermedades en plantas mediante la carga de imágenes, ayudando en el diagnóstico temprano."
  }
  habilidades={["Android Studio", "Java", "Python", "TensorFlow", "Machine Learning"]}
  linkProjeto={"https://github.com/Ntanzi07/GrowGreen-UPXProject"}
  language={language}
/>
          <ProjectCard
  imagem={grodavilla}
  titulo={"Grão da Villa"}
  subtitulo={
    language === "pt"
      ? "Aplicativo mobile desenvolvido no Android Studio com Java, utilizando Firebase. Focado na experiência do cliente e na gestão de produtos e pedidos."
      : language === "en"
      ? "Mobile application developed in Android Studio using Java, integrated with Firebase. Focused on customer experience and product and order management."
      : "Aplicación móvil desarrollada en Android Studio con Java, utilizando Firebase. Enfocada en la experiencia del cliente y en la gestión de productos y pedidos."
  }
  habilidades={["Android Studio", "Java", "Firebase Auth", "Firebase Realtime Database"]}
  linkProjeto={"https://github.com/giualbuq/GraoDaVilla"}
  language={language}
/>

          <ProjectCard
  imagem={chronos}
  titulo={"Chronos Pomodoro"}
  subtitulo={
    language === "pt"
      ? "Aplicação desenvolvida em React e TypeScript para gerenciamento de ciclos de foco utilizando a técnica Pomodoro."
      : language === "en"
      ? "Application built with React and TypeScript to manage focus cycles using the Pomodoro technique."
      : "Aplicación construida con React y TypeScript para gestionar ciclos de enfoque usando la técnica Pomodoro."
  }
  habilidades={["React", "TypeScript", "HTML", "CSS", "State Management"]}
  linkProjeto={"https://chronos-pomodoro-tan.vercel.app/"}
  language={language}
/>


          <ProjectCard
  imagem={gitfind}
  titulo={"Git Find"}
  subtitulo={
    language === "pt"
      ? "Aplicação que consome a API do GitHub para buscar usuários e visualizar seus repositórios e informações de perfil."
      : language === "en"
      ? "Application that consumes the GitHub API to search users and display their repositories and profile information."
      : "Aplicación que consume la API de GitHub para buscar usuarios y mostrar sus repositorios e información de perfil."
  }
  habilidades={["React", "JavaScript", "CSS", "GitHub API", "API Integration"]}
  linkProjeto={"https://git-find-sigma.vercel.app/"}
  language={language}
/>
  
      </div>
      </div>
    </section>
  );
}
