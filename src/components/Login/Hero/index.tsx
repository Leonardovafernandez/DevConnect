import styles from "./styles.module.css";
import dev from "../../../assets/Login/Hero/dev.svg"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles["hero-image"]} >
                <img src={dev} alt="Dev"/>
            </div>
            <div className={styles["hero-text"]}>
                <span><strong>Siga</strong> amigos e outros devs do seu interesse usando o botão seguir</span>
                <span><strong>Conheça</strong> novos devs e repositórios através da aba explorar</span>
                <span><strong>Compartilhe</strong> ideias e soluções em um só lugar</span>
            </div>
        </div>
    )
}