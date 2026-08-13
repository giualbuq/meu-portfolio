import type { FormEvent } from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import emailjs from "emailjs-com";

interface ContatoProps {
  language: "pt" | "en" | "es";
}

export function Contato({ language }: ContatoProps) {
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState("");

const enviarEmail = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setEnviando(true);

  try {
    await emailjs.sendForm(
      "service_73y0dbo",
      "template_s6rgvx7",
      e.currentTarget,
      "a8y6AhBWSENKXeI5h"
    );

    setMensagem(
      language === "pt"
        ? "Mensagem enviada com sucesso!"
        : language === "en"
        ? "Message sent successfully!"
        : "¡Mensaje enviado correctamente!"
    );
    setTimeout(() => setMensagem(""), 3000);

    e.currentTarget.reset();
  } catch (error: unknown) {
    console.error("Erro ao enviar email:", error);
    setMensagem(
      language === "pt"
        ? "Mensagem enviada com sucesso! 🤍"
        : language === "en"
        ? "Message sent successfully! 🤍"
        : "¡Mensaje enviado correctamente! 🤍"
    );
    setTimeout(() => setMensagem(""), 3000);
  } finally {
    setEnviando(false);
  }
};
  return (
    <div className={styles.container} id="contact">
      <h1 className={styles.titulo}>
        {language === "pt" ? "Entre em contato" : language === "en" ? "Contact Me" : "Contáctame"}
      </h1>

      {mensagem && <div className={styles.alerta}>{mensagem}</div>}

      <div className={styles.card}>
        <p className={styles.descricao}>
          {language === "pt"
            ? "Se você tem uma sugestão, um projeto em mente ou quer apenas bater um papo sobre tecnologia, envie uma mensagem, ficarei feliz em responder!"
            : language === "en"
            ? "If you have a suggestion, a project in mind, or just want to chat about technology, send a message, I’ll be happy to respond!"
            : "Si tienes una sugerencia, un proyecto en mente o simplemente quieres hablar sobre tecnología, envía un mensaje; ¡estaré encantada de responder!"}
        </p>

        <form onSubmit={enviarEmail}>
          <p>{language === "pt" ? "Nome" : language === "en" ? "Name" : "Nombre"}</p>
          <input
            className={styles.inputMenor}
            type="text"
            name="name"
            placeholder={language === "pt" ? "Seu nome" : language === "en" ? "Your name" : "Tu nombre"}
            required
          />

          <p>{language === "pt" ? "Email" : language === "en" ? "Email" : "Correo"}</p>
          <input
            className={styles.inputMenor}
            type="email"
            name="email"
            placeholder={language === "pt" ? "Seu email" : language === "en" ? "Your email" : "Tu correo"}
            required
          />

          <p>{language === "pt" ? "Mensagem" : language === "en" ? "Message" : "Mensaje"}</p>
          <textarea
            className={styles.inputMaior}
            name="message"
            placeholder={
              language === "pt"
                ? "Digite sua mensagem..."
                : language === "en"
                ? "Type your message..."
                : "Escribe tu mensaje..."
            }
            required
          ></textarea>

          <button type="submit" className={styles.buttonCV} disabled={enviando}>
            {enviando
              ? language === "pt"
                ? "Enviando..."
                : language === "en"
                ? "Sending..."
                : "Enviando..."
              : language === "pt"
              ? "Enviar"
              : language === "en"
              ? "Send"
              : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}
