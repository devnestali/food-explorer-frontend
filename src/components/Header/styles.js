import { styled } from 'styled-components'

export const Container = styled.div`
    grid-area: header;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    padding: 2.8rem;
    
    position: fixed;
    z-index: 4;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    .logo {
        display: inline-flex;
        align-items: center;
        gap: 1rem;

        a {
            font-size: 2.4rem;
            font-weight: bold;
        }
    }
`;

export const InputSearch = styled.div`
    min-width: 58rem;

    display: flex;
    align-items: center;
    gap: 1.4rem;

    position: relative;

    > svg {
        height: 2.4rem;
        width: 2.4rem;

        position: absolute;
        left: 28%;
        z-index: 1;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > input {
        width: 100%;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        border: none;
        outline: none;
        border-radius: 0.5rem;
        font-size: 1.6rem;

        padding: 1.6rem 0 1.6rem 20rem;
    }

    > input::placeholder {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;
