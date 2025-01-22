import { Container } from "./styles";

export function ButtonToOrder({ title, icon: Icon, onClick, toAdminMobile}) {
    return (
        <Container 
            onClick={onClick} 
            data-toAdminMobile={toAdminMobile}
        >
            {Icon && <Icon />}
            {title}
        </Container>
    )
}