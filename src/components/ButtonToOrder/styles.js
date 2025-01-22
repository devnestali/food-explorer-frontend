import { styled } from 'styled-components'

export const Container = styled.button`
    width: 21.6rem;
    height: 5.6rem;

    padding: 1.2rem;
    border-radius: 0.5rem;
    
    border: none;
    outline: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: 1.4rem;
    line-height: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    > svg {
        height: 2.2rem;
        width: 2.2rem;
    }

    
    @media (max-width: 1178px) {
        order: 3;
        width: 18rem;
        
        &[data-toAdminMobile="true"] {
            display: none;
        }
    }
`;