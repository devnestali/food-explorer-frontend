import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useAuth } from '../../hooks/auth';

import { showToasts } from "../../utils/toasts";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const { signIn } = useAuth();

    const navigate = useNavigate();

    function handleClickToRegister() {
        navigate("/register");
    };

    function handleLogin() {
        const emptyField = !email || !password;

        if(emptyField) {
            return showToasts.error('Preencha todos os campos!');
        };

        signIn(email, password);
    };
    
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
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        title="Senha"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button title="Entrar" onClick={handleLogin}/>
                    <a onClick={handleClickToRegister} >
                        Criar uma conta
                    </a>
                </Form>
        </Container>
    )
};