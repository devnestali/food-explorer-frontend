import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, toBack, ...rest }) {
    return (
        <Container 
        data-toback={toBack}
        {...rest}
        >
            <a href="">
                {Icon && <Icon />}
                {title}
            </a>
        </Container>
    )
}