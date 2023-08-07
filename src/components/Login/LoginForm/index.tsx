import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { useState } from "react"

export default function LoginForm() {
    const [step, setStep] = useState("recoveryTwo");
    // const [email, setEmail] = useState("");
    // const [passWordOne, setPassWordOne] = useState("");
    // const [passWordTwo, setPassWordTwo] = useState("");
    console.log(step);

    return (
        <div className={styles["login-form"]}>
            {step === "login" ? <form>
                <div className={styles["login-form-title"]}>
                    <span>
                        Acesse o <strong>login</strong>
                    </span>
                    <span>
                        com seu usuário do Github
                    </span>
                </div>
                <div className={styles["login-form-inputs"]}>
                    <input type="text" placeholder="Digite seu e-mail"/>
                    <input type="password" placeholder="Digite sua senha"/>
                </div>
                <span className={styles.link}>
                    <Link to={'/home'}>
                        esqueceu a senha ?
                    </Link>
                </span>
                <button onClick={() => alert("Login")}>
                    Login
                </button>
            </form> : ""}
            {step === "loginTwo" ? <form>
                <div className={styles["login-form-title"]}>
                    <span>
                        Acesse o <strong>login</strong>
                    </span>
                    <span>
                        com seu usuário do Github
                    </span>
                </div>
                <div className={styles["login-form-inputs"]}>
                    <input type="text" placeholder="Digite seu e-mail"/>
                    <input type="password" placeholder="Digite sua senha"/>
                    <input type="text" placeholder="Repita sua senha"/>
                    <input type="password" placeholder="Usuário Github"/>
                    <input type="text" placeholder="Apelido"/>
                </div>
                <button onClick={() => alert("Login")}>
                    Login
                </button>
            </form> : ""}
            {step === "recoveryOne" ? <form>
                <div className={styles["login-form-title"]}>
                    <span>
                        Recupere o acesso ao <strong>login</strong>
                    </span>
                    <span>
                        com o e-mail cadastrado
                    </span>
                </div>
                <div className={styles["login-form-inputs"]}>
                    <input type="text" placeholder="Digite seu e-mail"/>
                </div>
                <button onClick={() => alert("Login")}>
                    Enviar
                </button>
            </form> : ""}
            {step === "recoveryTwo" ? <form>
                <div className={styles["login-form-title"]}>
                    <span>
                        Cadastre uma nova senha
                    </span>
                </div>
                <div className={styles["login-form-inputs"]}>
                    <input type="password" placeholder="Digite a nova senha"/>
                    <input type="password" placeholder="Repita a nova senha"/>
                </div>
                <button onClick={() => alert("Login")}>
                    Login
                </button>
            </form> : ""}
        </div>
    )
}