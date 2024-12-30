import { styled } from 'styled-components'

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

            padding-top: 16.4rem;
            padding-bottom: 4.8rem;

            display: flex;
            flex-direction: column;

            > h2 {
                margin: 6.2rem 0 2rem;
            }
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
        top: -14.6rem;
        left: -7rem;
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

export const Meals = styled.div`
    position: relative;
    display: flex;
    gap: 2.7rem;

    overflow: hidden;
    border-radius: 1rem;
`;

export const Carousel = styled.div`
    display: flex;
    gap: 2.7rem;
    position: relative;

    overflow: hidden;
    border-radius: 1rem;

    > a {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        z-index: 3;

        font-size: 4rem;
    }

    > a:nth-of-type(1) {
        right: 0;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;

        width: 24rem;
        height: 100%;
        z-index: 2;
        pointer-events: none;

        background: linear-gradient(
        to left,
        ${({ theme }) => theme.COLORS.DARK_400},
        rgba(0, 10, 15, 0) 100%
        );
    }

    &::before {
        left: 0;
        transform: scaleX(-1);
    }

    &::after {
        right: 0;
    }
`;