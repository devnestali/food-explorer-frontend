import { Container } from "./styles";

export function ButtonToOrder({ title, onClick, icon: Icon}) {
    return (
        <Container>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}