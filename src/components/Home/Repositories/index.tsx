import repo from "../../../assets/Home/Dashboard/repos.svg"
import star from "../../../assets/Home/Dashboard/stars.svg"
import styles from "./styles.module.css"

export default function Repositories() {
    return (
        <div className={styles.repositories}>
            <div>
                <span>Meus últimos repositórios:</span>
            </div>
            <div className={styles["repositories-cards"]}>
                <div className={styles["repo-card"]}>
                    <div>
                        <div className={styles.title}>
                            <img src={repo} alt="" />
                            <span><strong>Leonardovafernandez/nomeDoRepositório</strong></span>
                        </div>
                        <span className={styles.subtitle}>Repositório</span>
                    </div>
                    <div className={styles.favs}>
                        <img src={star} alt="" />
                        <span>Star</span>
                    </div>
                </div>
                <div className={styles["repo-card"]}>
                    <div>
                        <div className={styles.title}>
                            <img src={repo} alt="" />
                            <span><strong>Leonardovafernandez/nomeDoRepositório</strong></span>
                        </div>
                        <span className={styles.subtitle}>Repositório</span>
                    </div>
                    <div className={styles.favs}>
                        <img src={star} alt="" />
                        <span>Star</span>
                    </div>
                </div>
                <div className={styles["repo-card"]}>
                    <div>
                        <div className={styles.title}>
                            <img src={repo} alt="" />
                            <span><strong>Leonardovafernandez/nomeDoRepositório</strong></span>
                        </div>
                        <span className={styles.subtitle}>Repositório</span>
                    </div>
                    <div className={styles.favs}>
                        <img src={star} alt="" />
                        <span>Star</span>
                    </div>
                </div>
                <div className={styles["repo-card"]}>
                    <div>
                        <div className={styles.title}>
                            <img src={repo} alt="" />
                            <span><strong>Leonardovafernandez/nomeDoRepositório</strong></span>
                        </div>
                        <span className={styles.subtitle}>Repositório</span>
                    </div>
                    <div className={styles.favs}>
                        <img src={star} alt="" />
                        <span>Star</span>
                    </div>
                </div>
            </div>
        </div>
    )
}