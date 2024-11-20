import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    .notFound {
        display: flex;
        flex-direction: column;
        justify-content: center;

        background: linear-gradient(to bottom, #091E26, #00131C);

        padding: 6.4rem;
        border-radius: .8rem;

        box-shadow: 10px 10px 8px rgba(0, 0, 0, .5);

        span {
            color: ${({ theme }) => theme.COLORS.TOMATO_200};
        }
    }
`;