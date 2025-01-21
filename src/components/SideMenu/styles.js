import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.4rem 1fr;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        width: 100%;

        .wrapper {
            height: 100%;
            
            display: flex;
            flex-direction: column;

            padding: 4.8rem 4.8rem;

            .search-container {
                position: relative;
                
                > svg {
                    height: 2.4rem;
                    width: 2.4rem;

                    position: absolute;
                    left: 1%;
                    bottom: 25%;
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
    
                    padding: 1.6rem 4rem;
                }
    
                > input::placeholder {
                    font-size: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_500};
                }
            }

            > button {
                background: transparent;
                
                border: none;
                outline: none;
                
                margin-top: 3.6rem;
                text-align: left;
                font-size: 2.4rem;
            }

            > button:after {
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                
                background-color: ${({ theme }) => theme.COLORS.DARK_1000};
            }
        }
    }
`;

export const Header = styled.header`
    grid-area: header;
    width: 100%;
    height: 11.4rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    padding: 5.6rem 2.8rem 2.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_700};

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        width: 1.8rem;
        height: 1.8rem;

        cursor: pointer;

        > svg {
            font-size: 2rem;
        }
    }

    > h2 {
        font-weight: 400;
        font-size: 2.1rem;
    }
`;