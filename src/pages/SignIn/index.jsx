import { Container } from "./styles"
import { Input } from "../../components/Input"
import { Wrapper } from "../../components/Wrapper"


export function SignIn() {
    return (
        <Container>
            <Wrapper>
                <Input 
                    title="Seu nome"
                    placeholder="Digite seu nome..."
                />
                <Input 
                    title="Seu nome"
                    placeholder="Digite seu nome..."
                />
                <Input 
                    title="Seu nome"
                    placeholder="Digite seu nome..."
                />
            </Wrapper>
        </Container>
    )
}