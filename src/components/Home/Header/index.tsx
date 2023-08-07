import styles from "./styles.module.css";
import lupa from "../../../assets/Home/Header/Lupa.svg"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.logo}></div>
                    <div className={styles.nav}>
                        <span><strong>Inicio</strong></span>
                        <span className={styles.blue}>|</span>
                        <span>Pull Requests</span>
                        <span className={styles.blue}>|</span>
                        <span>Issues</span>
                        <span className={styles.blue}>|</span>
                        <span>Marketplace</span>
                        <span className={styles.blue}>|</span>
                        <span>Explore</span>
                    </div>                    
                </div>
                <div className={styles.right}>
                    <div className={styles.logout}>
                        <span className={styles.blue}>|</span>
                        <span>Sair</span>
                    </div>
                    <div className={styles.search}>
                        <img src={lupa} alt="Pesquisar"/>
                        <span>Pesquise no login</span>
                    </div>
                </div>
            </div>
        </div>
    )
}