import { Container } from "./styles"

export function Input({ title, type="text", toAdmin , ...rest}) {
    return (
        <Container className="inputComponent">
            <label>{title}</label>
            <input 
                type={type}
                data-toadmin={toAdmin}
                {...rest}
            />
        </Container>
    )
}