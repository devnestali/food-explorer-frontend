import { styled } from 'styled-components';

export const Container = styled.div`
    flex-grow: 1;

    margin-top: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

        > label {
            font-size: 1.6rem;
        }

        > input {
            flex-grow: 1;
                
            height: 4.8rem;
            width: 100%;
            
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            padding: 1.6rem;
            border: none;
            outline: none;
                
            
            font-size: 1.6rem;
            border-radius: 0.8rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
        
        > input:focus-within {
            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        }
`;