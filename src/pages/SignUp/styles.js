import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.9rem;

        > img {
            width: 5rem;
            height: 5rem;
        }

        > h1 {
            font-size: 4.2rem;
            font-weight: bold;
        }
    }

    @media (max-width: 1178px) {
        > div {
            display: none;
        }
    }
`;

export const Form = styled.form`
    width: 47.6rem;

    padding: 6.4rem;
    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    > h1 {
        text-align: center;
        font-weight: 500;
    }

    .mobile-button {
        display: inline-flex;
    }
`;