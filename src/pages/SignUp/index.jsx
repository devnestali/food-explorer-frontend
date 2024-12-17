import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from '../../services/api';
import { showToasts } from '../../utils/toasts';


export function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    async function handleSignUp() {
        try {
            const response = await api.post('/users', {
                username: username,
                email: email,
                password: password,
            });
            
            showToasts.success(response.data.message);
            handleNavigate();


        } catch (error) {
            if(error.message) {
                showToasts.error(error.response.data.message);
            }
        };
        
    };

    function handleNavigate() {
        navigate('/');
    };

    
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
                        onChange={e => setUsername(e.target.value)}
                    />
                    <Input 
                        title="Email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        type="password"
                        title="Senha"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button title="Criar conta" onClick={handleSignUp}/>
                    <ButtonText title="Já tenho uma conta" />
                </Form>
        </Container>
    )
};