import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, toBack, onClick, ...rest }) {
    return (
        <Container
        to="/" 
        data-toback={toBack}
        onClick={onClick}
        {...rest}
        >
            {Icon && <Icon />}
            {title}
        </Container>
    )
}