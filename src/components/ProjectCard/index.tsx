import styles from "./styles.module.css";

export type ProjectCardProps = {
  imagem: string;
  titulo: string;
  subtitulo: string;
  habilidades: string[];
  linkProjeto: string;
};

export function ProjectCard({ imagem, titulo, subtitulo, habilidades, linkProjeto}: ProjectCardProps) {
  return (
    <div onClick={() => window.open(linkProjeto, "_blank")} className={styles.container}>
      <div className={styles.card}>
        <img className={styles.imagemProjeto} src={imagem} alt={titulo} />

        <h4>{titulo}</h4>
        <p>{subtitulo}</p>

        <div className={styles.habilidades}>
          {habilidades.map((hab, index) => (
            <p key={index}>{hab}</p>
          ))}
        </div>
        <a className={styles.linkProjeto} href={linkProjeto}> 🔗 Ver Projeto </a>

      </div>
    </div>
  );
}
