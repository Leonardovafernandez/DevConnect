import Footer from "../../components/Login/Footer"
import Hero from "../../components/Login/Hero"
import LoginForm from "../../components/Login/LoginForm"
import { BackgroundContainer, ContentContainer, MainContainer, MainHeroContainer, MainLoginContainer, FooterContainer } from "./styles";

export default function Login() {
    return (
        <BackgroundContainer>
            <ContentContainer>
                <MainContainer>
                    <MainHeroContainer>
                        <Hero />
                    </MainHeroContainer>
                    <MainLoginContainer>
                        <LoginForm />
                    </MainLoginContainer>
                </MainContainer>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </ContentContainer>
        </BackgroundContainer>
    )
}