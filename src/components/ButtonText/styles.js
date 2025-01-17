import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    width: 100%;
    
    text-align: center;
    
    padding: 3.2rem;
    
    &[data-toback="true"] {
        text-align: left;
        width: auto;
        padding: 0;
        
        font-weight: bold;
        font-size: 2.4rem;

        svg {
            width: 3.2rem;
            height: 3.2rem;
        }
    }
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    line-height: 2.4rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    svg {
        width: 2.2rem;
        height: 2.2rem;
    }

    @media (max-width: 1178px) {
        display: none;
    }
`;