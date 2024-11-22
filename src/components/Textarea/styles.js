import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > textarea {
        width: 100%;
        height: 17.2rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border: none;
        outline: none;
        resize: none;

        border-radius: 0.8rem;
        padding: 1.4rem;
    }

    > textarea::placeholder  {
        font-size: 1.6rem;
        line-height: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;