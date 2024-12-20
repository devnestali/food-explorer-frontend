import { styled } from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    width: 30.4rem;
    height: 46.2rem;
    
    padding: 2.4rem 2.4rem 4.6rem;
    border-radius: 0.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    > .favorite {
        position: absolute;
        top: 4%;
        left: 87%;

        z-index: 3;

        > button {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            background: transparent;
            border: none;
            outline: none;

        }
    }
    

    > img {
        width: 17.6rem;
        height: 17.6rem;

        margin-bottom: 1.5rem;
    }

    > p {
        width: 25.6rem;
        height: 4.4rem;
        
        font-size: 1.4rem;
        text-align: center;
        padding: 0 1rem;

        margin-bottom: 1.5rem;
    }

    > span {
        font-size: 3.2rem;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
`;

export const MealTitle = styled.div`
    display: flex;
    gap: 1rem;
    
    line-height: 140%;
    
    > h2 {
        font-size: 2.4rem;
        font-weight: bold;

        margin-bottom: 1.5rem;
        text-align: center;
    }

    > svg {
        min-width: 2.2rem;
        min-height: 2.2rem;

        stroke-width: 4;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 1.5rem;

    margin-top: 1.5rem;

`;

export const Amount = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    > button {
        background: transparent;

        border: none;
        outline: none;
        
        > svg {
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    > span {
        font-size: 2rem;
    }
`;