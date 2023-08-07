import styles from "./styles.module.css"
import repo from "../../../assets/Home/Dashboard/repos.svg"
import star from "../../../assets/Home/Dashboard/stars.svg"
import followers from "../../../assets/Home/Dashboard/followers.svg"
import binoculars from "../../../assets/Home/Dashboard/binoculars.svg"

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.title}>
                <span>Bem-vindo(a), Jandinho</span>
            </div>
            <div className={styles["good-luck-message"]}>
                <span><strong>Sorte de hoje:</strong> Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir.</span>
            </div>
            <div className={styles.metricas}>
                <div className={styles.number}>
                    <span>Repositórios</span>
                    <div className={styles.numbers}>
                        <img src={repo} alt="" />
                        <span>64</span>
                    </div>
                </div>
                <div className={styles.number}>
                    <span>Favoritos</span>
                    <div className={styles.numbers}>
                        <img src={star} alt="" />
                        <span>1.4k</span>
                    </div>                
                </div>
                <div className={styles.number}>
                    <span>Seguidores</span>
                    <div className={styles.numbers}>
                        <img src={followers} alt="" />
                        <span>1.1k</span>
                    </div>                
                </div>
                <div className={styles.number}>
                    <span>Seguindo</span>
                    <div className={styles.numbers}>
                        <img src={binoculars} alt="" />
                        <span>216</span>
                    </div>
                </div>
            </div>
        </div>
    )
}