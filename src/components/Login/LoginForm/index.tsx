import { Link } from "react-router-dom"
import { LoginFormContainer, LoginForms, LoginFormTitleContainer, LoginFormInputsContainer, LoginFormInput, LinkContainer, LoginFormButton } from "./styles.ts"
import { useState } from "react"

export default function LoginForm() {
    const [step, setStep] = useState("login");
    // const [email, setEmail] = useState("");
    // const [passWordOne, setPassWordOne] = useState("");
    // const [passWordTwo, setPassWordTwo] = useState("");
    console.log(step);

    return (
        <LoginFormContainer>
            {step === "login" ? <LoginForms>
                <LoginFormTitleContainer>
                    <span>
                        Acesse o <strong>login</strong>
                    </span>
                    <span>
                        com seu usuário do Github
                    </span>
                </LoginFormTitleContainer>
                <LoginFormInputsContainer>
                    <LoginFormInput type="text" placeholder="Digite seu e-mail"/>
                    <LoginFormInput type="password" placeholder="Digite sua senha"/>
                </LoginFormInputsContainer>
                <LinkContainer>
                    <Link to={'/home'}>
                        esqueceu a senha ?
                    </Link>
                </LinkContainer>
                <LoginFormButton onClick={() => alert("Login")}>
                    Login
                </LoginFormButton>
            </LoginForms> : ""}
            {step === "loginTwo" ? <LoginForms>
                <LoginFormTitleContainer>
                    <span>
                        Acesse o <strong>login</strong>
                    </span>
                    <span>
                        com seu usuário do Github
                    </span>
                </LoginFormTitleContainer>
                <LoginFormInputsContainer>
                    <LoginFormInput type="text" placeholder="Digite seu e-mail"/>
                    <LoginFormInput type="password" placeholder="Digite sua senha"/>
                    <LoginFormInput type="text" placeholder="Repita sua senha"/>
                    <LoginFormInput type="password" placeholder="Usuário Github"/>
                    <LoginFormInput type="text" placeholder="Apelido"/>
                </LoginFormInputsContainer>
                <LoginFormButton onClick={() => alert("Login")}>
                    Login
                </LoginFormButton>
            </LoginForms> : ""}
            {step === "recoveryOne" ? <LoginForms>
                <LoginFormTitleContainer>
                    <span>
                        Recupere o acesso ao <strong>login</strong>
                    </span>
                    <span>
                        com o e-mail cadastrado
                    </span>
                </LoginFormTitleContainer>
                <LoginFormInputsContainer>
                    <LoginFormInput type="text" placeholder="Digite seu e-mail"/>
                </LoginFormInputsContainer>
                <LoginFormButton onClick={() => alert("Login")}>
                    Enviar
                </LoginFormButton>
            </LoginForms> : ""}
            {step === "recoveryTwo" ? <LoginForms>
                <LoginFormTitleContainer>
                    <span>
                        Cadastre uma nova senha
                    </span>
                </LoginFormTitleContainer>
                <LoginFormInputsContainer>
                    <LoginFormInput type="password" placeholder="Digite a nova senha"/>
                    <LoginFormInput type="password" placeholder="Repita a nova senha"/>
                </LoginFormInputsContainer>
                <LoginFormButton onClick={() => alert("Login")}>
                    Login
                </LoginFormButton>
            </LoginForms> : ""}
        </LoginFormContainer>
    )
}