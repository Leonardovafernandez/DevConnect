import { HeroContainer, HeroImageContainer, HeroTextContainer, StrongSpan } from "./styles.ts";
import dev from "../../../assets/Login/Hero/dev.svg"

export default function Hero() {
    return (
        <HeroContainer>
            <HeroImageContainer>
                <img src={dev} alt="Dev"/>
            </HeroImageContainer>
            <HeroTextContainer>
                <span><StrongSpan>Siga</StrongSpan> amigos e outros devs do seu interesse usando o botão seguir</span>
                <span><StrongSpan>Conheça</StrongSpan> novos devs e repositórios através da aba explorar</span>
                <span><StrongSpan>Compartilhe</StrongSpan> ideias e soluções em um só lugar</span>
            </HeroTextContainer>
        </HeroContainer>
    )
}