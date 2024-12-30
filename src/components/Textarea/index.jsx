import { Container } from "./styles";

export function Textarea({ placeholder, ...rest}) {
    return (
        <Container>
            <label htmlFor="textarea">Descrição</label>

            <textarea 
                id="textarea" 
                placeholder={placeholder}
                {...rest}
            />
        </Container>
    )
}