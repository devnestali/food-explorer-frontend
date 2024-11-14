import { styled } from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    margin-top: 3.2rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    
    border: none;
    outline: none;
    
    text-align: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    &[data-todelete="true"] {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
    
    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`;