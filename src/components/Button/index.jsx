import { Container } from "./styles";

export function Button({ toEdit = false, toDelete, title, onClick, toMeal }) {
    return (
        <Container
            className="button"
            type="button"
            data-todelete={toDelete}
            data-tomeal={toMeal}
            data-toedit={toEdit}
            onClick={onClick}
        >
            {title}
        </Container>
    )
}