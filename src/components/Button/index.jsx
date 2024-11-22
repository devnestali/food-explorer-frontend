import { Container } from "./styles";

export function Button({ disabled = false, toDelete, title, onClick, toMeal }) {
    return (
        <Container
            className="button"
            type="button"
            data-todelete={toDelete}
            data-tomeal={toMeal}
            disabled={disabled}
            onClick={onClick}
        >
            {title}
        </Container>
    )
}