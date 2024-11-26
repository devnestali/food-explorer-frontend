import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { useNavigate } from "react-router-dom"

export function SignIn() {
    const navigate = useNavigate();

    function handleClickToRegister() {
        navigate("/register");
    }
    
    return (
        <Container>
                <div>
                    <img src="/logo.svg" alt="logo" />
                    <h1>food explorer</h1>
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
                    <a onClick={handleClickToRegister} >
                        Criar uma conta
                    </a>
                </Form>
        </Container>
    )
}