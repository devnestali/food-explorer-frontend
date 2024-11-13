import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft } from "react-icons/fi"

export function SignIn() {
    return (
        <Container>
                <div>
                    <img src="/logo.svg" alt="logo" />
                    <h1>Food Explorer</h1>
                </div>
                <Form>
                    <h1>Faça login</h1>
                    <Input 
                        title="Email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                    <Input 
                        title="Senha"
                        placeholder="No mínimo 6 caracteres"
                    />
                    <Button title="Entrar" />
                    <ButtonText title="Criar uma conta" />
                </Form>
        </Container>
    )
}