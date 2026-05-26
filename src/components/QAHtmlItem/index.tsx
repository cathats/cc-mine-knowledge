import {useState} from 'react';
import styles from './styles.module.css';

type QAHtmlItemProps = {
  question: string;
  html: string;
};

export default function QAHtmlItem({question, html}: QAHtmlItemProps) {
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
      <div
        className={revealed ? styles.answer : `${styles.answer} ${styles.masked}`}
        dangerouslySetInnerHTML={{__html: html}}
      />
    </section>
  );
}
