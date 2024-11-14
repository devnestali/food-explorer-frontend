import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
    return (
        <Container>
                <div>
                    <img src="/logo.svg" alt="logo" />
                    <h1>food explorer</h1>
                </div>
                <Form>
                    <h1>Crie sua conta</h1>
                    <Input 
                        title="Seu nome"
                        placeholder="Exemplo: Maria da Silva"
                    />
                    <Input 
                        title="Email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                    <Input 
                        title="Senha"
                        placeholder="No mínimo 6 caracteres"
                    />
                    <Button title="Criar conta" />
                    <ButtonText title="Já tenho uma conta" />
                </Form>
        </Container>
    )
}