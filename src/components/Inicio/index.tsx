import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface InicioProps {
  language: "pt" | "en";
}

type Line = {
  prompt: string;
  command: string;
  output?: string;
};

const linesPt: Line[] = [
  { prompt: "giulia@dev:~$", command: " whoami", output: "Desenvolvedora em formação | Explorando tecnologia" },
  { prompt: "giulia@dev:~$", command: " git status", output: "Sempre explorando e aprendendo" },
];

const linesEn: Line[] = [
  { prompt: "giulia@dev:~$", command: " whoami", output: "Developer in training | Exploring technology" },
  { prompt: "giulia@dev:~$", command: " git status", output: "Always exploring and learning" },
];

type RenderedLine =
  | { type: "done"; prompt: string; command: string; output?: string }
  | { type: "cursor"; prompt: string };

export function Inicio({ language }: InicioProps) {
  const [rendered, setRendered] = useState<RenderedLine[]>([]);
  const [typingText, setTypingText] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setRendered([]);
    setTypingText("");

    const allLines = language === "pt" ? linesPt : linesEn;
    let lineIndex = 0;
    let charIndex = 0;
    let phase: "typing" | "output" = "typing";
    let currentRendered: RenderedLine[] = [];

    const tick = () => {
      const line = allLines[lineIndex];

      if (phase === "typing") {
        if (charIndex <= line.command.length) {
          const text = line.command.slice(0, charIndex);
          setTypingText(text);
          charIndex++;
          timeoutRef.current = setTimeout(tick, 60);
        } else {
          phase = "output";
          timeoutRef.current = setTimeout(tick, 200);
        }
      } else {
        const newLine: RenderedLine = {
          type: "done",
          prompt: line.prompt,
          command: line.command,
          output: line.output,
        };
        currentRendered = [...currentRendered, newLine];
        setRendered([...currentRendered]);
        setTypingText("");
        lineIndex++;
        charIndex = 0;
        phase = "typing";

        if (lineIndex < allLines.length) {
          timeoutRef.current = setTimeout(tick, 400);
        } else {
          const cursor: RenderedLine = { type: "cursor", prompt: "giulia@dev:~$" };
          currentRendered = [...currentRendered, cursor];
          setRendered([...currentRendered]);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 600);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [language]);

  return (
    <section className={styles.container} id="home">
      <div className={styles["container-inner"]}>

        <div className={styles.content}>
          <p className={styles.title}>
            {language === "pt" ? "Olá, sou a" : "Hi, I'm"}
          </p>
          <p className={styles.name}>
            Giulia <br /><span>Silva</span>
          </p>
          <p className={styles.subtitle}>
            {language === "pt"
              ? "Estudante de Engenharia da Computação."
              : "Computer Engineering Student."}
          </p>
          <p className={styles.description}>
            {language === "pt"
              ? "Adoro explorar novas tecnologias, enfrentar desafios e contribuir com soluções que façam a diferença."
              : "I love exploring new technologies, tackling challenges, and contributing with solutions that make a difference."}
          </p>
          <div className={styles.buttonSection}>
            <button
              className={styles.buttonCV}
              onClick={() => window.open("/Curriculo-Giulia-Silva.pdf", "_blank")}
            >
              {language === "pt" ? "Baixar CV" : "Download CV"}
            </button>
          </div>
        </div>

        {/* TERMINAL */}
        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} style={{ background: "#ff5f57" }} />
            <span className={styles.dot} style={{ background: "#febc2e" }} />
            <span className={styles.dot} style={{ background: "#28c840" }} />
            <span className={styles.terminalTitle}>bash</span>
          </div>
          <div className={styles.terminalBody}>

            {rendered.map((line, i) => {
              if (line.type === "done") {
                return (
                  <p key={i} className={styles.terminalLine}>
                    <span className={styles.prompt}>{line.prompt}</span>
                    <span className={styles.command}>{line.command}</span>
                    {line.output && (
                      <span className={styles.output}>{line.output}</span>
                    )}
                  </p>
                );
              }
              if (line.type === "cursor") {
                return (
                  <p key={i} className={styles.terminalLine}>
                    <span className={styles.prompt}>{line.prompt}</span>
                    <span className={styles.blink}>▋</span>
                  </p>
                );
              }
              return null;
            })}

            {rendered[rendered.length - 1]?.type !== "cursor" && (
              <p className={styles.terminalLine}>
                <span className={styles.prompt}>giulia@dev:~$</span>
                <span className={styles.command}>{typingText}</span>
                <span className={styles.blink}>▋</span>
              </p>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}