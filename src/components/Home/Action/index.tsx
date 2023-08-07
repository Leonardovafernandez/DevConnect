import styles from "./styles.module.css"

export default function Action() {
    return (
        <div className={styles.action}>
            <div>
                <span>O que você deseja fazer?</span>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    <span>Criar repositório</span>
                </div>
                <div className={styles.button}>
                    <span>Importar Repositório</span>
                </div>
                <div className={styles.button}>
                    <span>Novo Gist</span>
                </div>
                <div className={styles.button}>
                    <span>Nova Organização</span>
                </div>
                <div className={styles.button}>
                    <span>Novo Projeto</span>
                </div>
            </div>
        </div>
    )
}