import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, toBack, ...rest }) {
    return (
        <Container 
        {...rest}
        >
            <a 
                href=""
                data-toback={toBack}
            >
                {Icon && <Icon />}
                {title}
            </a>
        </Container>
    )
}