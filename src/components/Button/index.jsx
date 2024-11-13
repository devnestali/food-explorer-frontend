import { Container } from "./styles";

export function Button({ disabled = false, toDelete, title, onClick }) {
    return (
        <Container
            type="button"
            data-todelete={toDelete}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </Container>
    )
}