import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    text-align: center;
    
    padding: 3.2rem;
    
    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        line-height: 2.4rem;

        display: inline-flex;
        align-items: center;
        gap: 0.8rem;

        &[data-toback="true"] {
            font-weight: bold;
            font-size: 2.4rem;

            svg {
                width: 3.2rem;
                height: 3.2rem;
            }
        }
    }

    svg {
        width: 2.2rem;
        height: 2.2rem;
    }
`;