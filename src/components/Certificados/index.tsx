import { useState } from "react";
import styles from "./styles.module.css";

interface Certificado {
  titulo: string;
  instituicao: string;
  descricao: {
    pt: string;
    en: string;
    es: string;
  };
  link: string;
}

interface CertificadosProps {
  language: "pt" | "en" | "es";
}

const certificados: Certificado[] = [
  {
    titulo: "MS-900: Fundamentos do Microsoft 365",
    instituicao: "Microsoft",
    descricao: {
      pt: "Conhecimento em serviços de nuvem, Microsoft 365, segurança e conformidade.",
      en: "Knowledge of cloud services, Microsoft 365, security and compliance.",
      es: "Conocimiento en servicios en la nube, Microsoft 365, seguridad y cumplimiento."
    },
    link: "https://learn.microsoft.com/pt-br/users/giuliaalbuquerque-4112/credentials/1be54327eab0214b?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    titulo: "Formação Desenvolvedor JavaScript",
    instituicao: "Digital Innovation One",
    descricao: {
      pt: "Aprendizado de JavaScript, HTML, CSS, DOM, eventos e boas práticas de desenvolvimento web.",
      en: "Learning JavaScript, HTML, CSS, DOM, events and best practices in web development.",
      es: "Aprendizaje de JavaScript, HTML, CSS, DOM, eventos y buenas prácticas de desarrollo web."
    },
    link: "https://hermes.dio.me/certificates/RA9JDAK5.pdf"
  },
  {
    titulo: "Formação Desenvolvedor React",
    instituicao: "Digital Innovation One",
    descricao: {
      pt: "Desenvolvimento de aplicações web com React, componentes, gerenciamento de estado e boas práticas.",
      en: "Development of web applications with React, components, state management and best practices.",
      es: "Desarrollo de aplicaciones web con React, componentes, gestión de estado y buenas prácticas."
    },
    link: "https://hermes.dio.me/certificates/GCHA7115.pdf"
  },
  {
    titulo: "Curso de Inglês",
    instituicao: "Happy&CO Academia de Inglês",
    descricao: {
      pt: "Aprendizado de inglês com foco em conversação, gramática e compreensão auditiva.",
      en: "Learning English with a focus on conversation, grammar, and listening comprehension.",
      es: "Aprendizaje de inglés con enfoque en conversación, gramática y comprensión auditiva."
    },
    link: "/Certificado-Ingles.pdf"
  },
  {
    titulo: "GFT Start #6 - Lógica de Programação",
    instituicao: "Digital Innovation One",
    descricao: {
      pt: "Aprendizado de lógica de programação, algoritmos, estruturas de controle e resolução de problemas.",
      en: "Learning programming logic, algorithms, control structures and problem-solving.",
      es: "Aprendizaje de lógica de programación, algoritmos, estructuras de control y resolución de problemas."
    },
    link: "https://hermes.dio.me/certificates/cover/ET4SWL5A.jpg"
  },
  {
    titulo: "Ri Happy - Front-end do Zero",
    instituicao: "Digital Innovation One",
    descricao: {
      pt: "Aprendizado de desenvolvimento front-end, HTML, CSS, JavaScript e boas práticas de desenvolvimento web.",
      en: "Learning front-end development, HTML, CSS, JavaScript and best practices in web development.",
      es: "Aprendizaje de desarrollo front-end, HTML, CSS, JavaScript y buenas prácticas de desarrollo web."
    },
    link: "https://hermes.dio.me/certificates/ESZVES3M.pdf"
  }
];

export function Certificados({ language }: CertificadosProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = Array.from({ length: Math.ceil(certificados.length / 2) }, (_, index) =>
    certificados.slice(index * 2, index * 2 + 2)
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.section} id="certificates">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          {language === "pt"
            ? "Certificados"
            : language === "en"
            ? "Certificates"
            : "Certificados"}
        </h2>

        <div className={styles.carousel}>
          <button
            type="button"
            className={styles.navButton}
            onClick={prevSlide}
            aria-label={language === "pt" ? "Certificado anterior" : language === "en" ? "Previous certificate" : "Certificado anterior"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className={styles.slide}>
                  {slide.map((certificado) => (
                    <article key={certificado.titulo} className={styles.card}>
                      <span className={styles.badge}>{certificado.instituicao}</span>
                      <h3>{certificado.titulo}</h3>
                        <p>{certificado.descricao[language]}</p>

                      <button
                        type="button"
                        className={styles.linkButton}
                        onClick={() => window.open(certificado.link, "_blank", "noopener,noreferrer")}
                      >
                        🔗 {language === "pt" ? "Ver certificado" : language === "en" ? "View certificate" : "Ver certificado"}
                      </button>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.navButton}
            onClick={nextSlide}
            aria-label={language === "pt" ? "Próximo certificado" : language === "en" ? "Next certificate" : "Próximo certificado"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
