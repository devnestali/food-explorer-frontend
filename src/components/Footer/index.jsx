import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
                <h2>food explorer</h2>
            </div>
            <p>© 2024 - Criado por <a href="http://github.com/devnestali" target="_blank">Victor Nestali</a></p>
        </Container>
    )
}