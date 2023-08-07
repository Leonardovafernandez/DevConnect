import Action from "../../components/Home/Action";
import Connections from "../../components/Home/Connections";
import Dashboard from "../../components/Home/Dashboard";
import Header from "../../components/Home/Header";
import Navigation from "../../components/Home/Nagigation";
import Repositories from "../../components/Home/Repositories";
import { HomeContainer, HeaderContainer, ContentContainer, AsideContainer, MainContainer, ConnectionsContainer } from "./styles";


export default function Home() {
    return (
        <HomeContainer>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <ContentContainer>
                <AsideContainer>
                    <Navigation />
                </AsideContainer>

                <MainContainer>
                    <Dashboard />
                    <Action />
                    <Repositories />
                </MainContainer>
                
                <ConnectionsContainer>
                    <Connections title={"Seguindo"} number={"(216)"} />
                    <Connections title={"Seguidores"} number={"(1.1k)"} />
                </ConnectionsContainer>
            </ContentContainer>
        </HomeContainer>
    )
}