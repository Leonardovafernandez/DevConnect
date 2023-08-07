import { Link } from "react-router-dom"
import { FooterContainer } from "./styles.ts"

export default function Footer() {
    return (
        <FooterContainer>
            <p>© 2022 Login - <Link to={"#"}>Sobre o Login</Link> - <Link to={"#"}>Centro de segurança</Link> - <Link to={"#"}>Privacidade</Link> - <Link to={"#"}>Termos</Link> - <Link to={"#"}>Contato</Link></p>
        </FooterContainer>
    )
}