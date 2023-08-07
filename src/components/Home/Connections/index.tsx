import styles from "./styles.module.css"

export default function Connections({ title, number }) {
    return (
        <div className={styles.connections}>
            <div className={styles.header}>
                <span><strong>{title}</strong></span>
                <span><strong>{number}</strong></span>
            </div>
            <div className={styles.cards}>
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
                <div className={styles.card} />
            </div>
            <div className={styles.footer}>
                <hr />
                <a><strong>Ver todos</strong></a>
            </div>
        </div>
    )
}