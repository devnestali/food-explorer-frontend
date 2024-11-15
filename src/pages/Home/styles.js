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

        overflow-y: auto;

        > .wrapper {
            height: 100%;

            padding-top: 16.4rem;
            padding-bottom: 4.8rem;

            display: flex;
            flex-direction: column;
        }
    }
`;

export const MainHeader = styled.div`
    height: 26rem;

    background: linear-gradient(to bottom, #091E26, #00131C);
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    
    > img {
        position: absolute;
        top: -56%;
        left: -5%;
    }

    > .mainHeaderTitle {
        padding-left: 50rem;

        h2 {
            font-size: 4rem;
            font-weight: 500;
            line-height: 140%;
            letter-spacing: .1rem;
        }
    }
`;