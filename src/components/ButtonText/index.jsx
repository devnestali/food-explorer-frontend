import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, toBack, ...rest }) {
    return (
        <Container
        to="/" 
        data-toback={toBack}
        {...rest}
        >
            <p>
                {Icon && <Icon />}
                {title}
            </p>
        </Container>
    )
}