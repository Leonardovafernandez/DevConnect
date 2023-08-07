import Footer from "../../components/Login/Footer"
import Hero from "../../components/Login/Hero"
import LoginForm from "../../components/Login/LoginForm"
import styles from "./styles.module.css"

export default function Login() {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <div className={styles["main-hero"]}>
                        <Hero />
                    </div>
                    <div className={styles["main-login"]}>
                        <LoginForm />
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}