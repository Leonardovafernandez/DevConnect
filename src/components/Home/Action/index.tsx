import { ActionContainer, ButtonsContainer, ActionButton, ActionFirstButton } from "./styles.ts"

export default function Action() {
    return (
        <ActionContainer>
            <span>O que você deseja fazer?</span>
            <ButtonsContainer>
                <ActionFirstButton>
                    Criar repositório
                </ActionFirstButton>
                <ActionButton>
                    Importar Repositório
                </ActionButton>
                <ActionButton>
                    Novo Gist
                </ActionButton>
                <ActionButton>
                    Nova Organização
                </ActionButton>
                <ActionButton>
                    Novo Projeto
                </ActionButton>
            </ButtonsContainer>
        </ActionContainer>
    )
}