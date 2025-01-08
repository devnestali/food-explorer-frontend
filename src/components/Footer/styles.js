import { styled } from 'styled-components'

export const Container = styled.footer`
    height: 7.7rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 12rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    .logo {
        display: inline-flex;
        gap: 1rem;

        img {
            height: 2.9rem;
            width: 2.9rem;
            
            filter: grayscale(1);
        }

        h2 {
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    a {
        position: relative;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-weight: 800;
        transition: all .5s;
        
        padding: .3rem;
        border-radius: .3rem;
        
        background: transparent;
        z-index: 1;
    }

    a::before,
    a::after {
        content: '';
        position: absolute;
        z-index: -1;
    }

    a:hover {
        background: ${({ theme }) => theme.COLORS.CAKE_100};
        box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.CAKE_100}, 
        0 0 25px ${({ theme }) => theme.COLORS.CAKE_100}, 
        0 0 50px ${({ theme }) => theme.COLORS.CAKE_100}, 
        0 0 200px ${({ theme }) => theme.COLORS.CAKE_100};
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

`;