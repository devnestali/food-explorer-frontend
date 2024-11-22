import { styled } from 'styled-components'

export const Container = styled.div`
    height: 4.8rem;

    padding: 0.4rem 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    display: flex;
    align-items: center;
    gap: 1.6rem;

    position: relative;
    border-radius: 0.8rem 0 0 0.8rem;

    &[data-isnew="true"] {
        > input {
            background-color: transparent;
            border: 2px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
            cursor: text;
        }
    }

    > input {
        height: 3.2rem;
        width: 11.8rem;

        flex-wrap: wrap;

        border-radius: 0.8rem;
        padding: 0.8rem 2rem 0.8rem 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
        
        border: none;
        outline: none;

        text-overflow: hidden;

        cursor: not-allowed;

    }

    > button {
        width: 0.8rem;
        height: 0.8rem;

        background: transparent;
        
        border: none;
        outline: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        position: absolute;
        right: 16%;
        top: 35%;
    }
`;