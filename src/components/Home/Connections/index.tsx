import { ConnectionsContainer, HeaderContainer, CardsContainer, CardContainer, LinkConnection, TitleSpan } from "./styles.ts";

type Props = {
    title: string,
    number: string,
  };

export default function Connections({ title, number }: Props) {
    return (
        <ConnectionsContainer>
            <HeaderContainer>
                <TitleSpan><strong>{title}</strong></TitleSpan>
                <span><strong>{number}</strong></span>
            </HeaderContainer>
            <CardsContainer>
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
            </CardsContainer>
            <LinkConnection>
                <hr />
                <a><strong>Ver todos</strong></a>
            </LinkConnection>
        </ConnectionsContainer>
    )
}