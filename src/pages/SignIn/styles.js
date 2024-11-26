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

    > a {
        width: 100%;
        
        text-align: center;
        
        padding: 3.2rem;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        line-height: 2.4rem;
    
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
    }
`;