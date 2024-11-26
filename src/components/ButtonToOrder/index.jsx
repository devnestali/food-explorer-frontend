import { Container } from "./styles";

export function ButtonToOrder({ title, icon: Icon, onClick}) {
    return (
        <Container onClick={onClick}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}