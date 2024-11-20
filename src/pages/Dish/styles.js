import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.4rem 1fr;
    grid-template-areas: 
    'header'
    'container';

    > main {
        grid-area: container;
        width: 100%;

        > .wrapper {
            height: 100%;

            padding-top: 4.8rem;
            padding-bottom: 4.8rem;

            display: flex;
            flex-direction: column;

            .ingredients {
                display: flex;
                gap: 1.2rem;
            }
        }
    }
`;

export const InfoMeal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.7rem;

    padding-top: 4.2rem;

    > img {
        width: 39rem;
        height: 39rem;
        
        object-fit: cover;
        opacity: 0.9;
    }
`;

export const DetailsMeal = styled.div`
    height: 30rem;
                
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h2 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
    }

    > p {
        font-size: 2.4rem;
        font-weight: 300;
        line-height: 140%;

        text-overflow: ellipsis;
    }
`;

export const Buttons = styled.div`
    width: 29.4rem;
                
    display: flex;
    align-items: center;
    gap: 3.3rem;

    margin-top: 2.4rem;

    .amount {
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
    }
`;