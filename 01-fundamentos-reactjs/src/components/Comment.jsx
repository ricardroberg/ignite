import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/ricardroberg.png"
        alt="user avatar/picture"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricard Roberg</strong>
              <time
                title="20 de novembro de 2022"
                dateTime="2022-11-20 12:25:00"
              >
                Cerda de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário"></button>
            <Trash size={20} />
          </header>

          <p>Muito com Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
          </button>
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  );
}
