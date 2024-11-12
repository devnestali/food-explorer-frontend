import { Container } from "./styles"

export function Input({ icon: Icon, title, type="text", className, ...rest}) {
    return (
        <Container className={className}>
            <label htmlFor={className}>{title}</label>
            <input 
                type={type}
                {...rest}
            />
        </Container>
    )
}