import { Container } from "./styles";

export function Textarea({ placeholder}) {
    return (
        <Container>
            <label htmlFor="textarea">Descrição</label>

            <textarea id="textarea" placeholder={placeholder}/>
        </Container>
    )
}