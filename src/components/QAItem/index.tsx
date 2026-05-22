import type {ReactNode} from 'react';
import {useState} from 'react';
import styles from './styles.module.css';

type QAItemProps = {
  question: string;
  children: ReactNode;
};

export default function QAItem({question, children}: QAItemProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.question}>{question}</h3>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setRevealed(!revealed)}>
          {revealed ? '隐藏答案' : '显示答案'}
        </button>
      </div>
      <div className={styles.answerWrap}>
        <div className={revealed ? styles.answer : `${styles.answer} ${styles.masked}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
