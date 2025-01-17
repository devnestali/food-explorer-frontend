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
    z-index: 100;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    @media (max-width: 1178px) {
        gap: 12rem;
    }

    .logo {
        display: inline-flex;
        align-items: center;
        gap: 1rem;

        @media (max-width: 1178px) {
            order: 2;
        }

        .text-container {
            position: relative;
            text-align: end;
            
            a {
                font-size: 2.4rem;
                font-weight: bold;
                
            }

            p {
                position: absolute;
                top: 90%;
                right: 0;

                font-size: 1.2rem;
                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
        }
    }

    .mobile-menu {
        display: none;

        @media (max-width: 1178px) {
            order: 1;
            
            display: flex;
            justify-content: center;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: transparent;

            border: none;
            outline: none;

            > svg {
                width: 4rem;
                height: 4rem;
            }

        }
    }

`;

export const InputSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1178px) {
        .mobile-search-container {
            display: block;
        }
    }
`;
