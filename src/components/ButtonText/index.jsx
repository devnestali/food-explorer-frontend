import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, toBack, onClick, className, ...rest }) {
    return (
        <Container
        to="/" 
        className={className}
        data-toback={toBack}
        onClick={onClick}
        {...rest}
        >
            {Icon && <Icon />}
            {title}
        </Container>
    )
}