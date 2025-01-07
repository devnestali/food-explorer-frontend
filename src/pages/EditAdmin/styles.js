import { styled } from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 10.4rem 1fr;
    grid-template-areas: 
    "header"
    "container";

    > main {
        grid-area: container;
        width: 100%;

        > .wrapper {
            height: 100%;
            
            display: flex;
            flex-direction: column;

            padding-top: 4rem;
            padding-bottom: 11.6rem;

            > h2 {
                margin: 2.4rem 0 3.2rem;

                font-weight: 400;
                font-size: 3.2rem;
                line-height: 140%;
            }
        }

    }
`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > .buttons {
        width: 34rem;

        display: flex;
        align-self: flex-end;
        gap: 3.2rem;
        
    }
`;

export const FieldImageInput = styled.div`
    > p {
        font-family: 'Poppins', serif;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        cursor: default;
    }

    > .dishImageInput {
        flex-grow: 1;
        height: 4.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 0.8rem;

        > label {
            width: 100%;
            height: 4.8rem;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 1.6rem;

            cursor: pointer;

            > input {
                display: none;
            }

            > .text-container {
                display: flex;
                align-items: center;
                gap: .8rem;

                > h3 {
                    font-weight: 500;
                }

                > svg {
                    width: 2.4rem;
                    height: 2.4rem;
                }
            }
        }

    }
`;

export const HeaderInputs = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;

    > .inputComponent {
        margin-top: 0;
    }
`;

export const FieldTypeInput = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    position: relative;

    > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > svg {
        position: absolute;
        bottom: 15%;
        right: 5%;

        font-size: 2.4rem;
    }

    > select {
        width: 100%;
        height: 4.8rem;

        border-radius: 0.8rem;
        
        border: none;
        outline: none;

        padding: 1.6rem;
        appearance: none;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
        
        > option {
            font-size: 1.4rem;
            color: white;
        }
    }
`;

export const BodyInputs = styled.div`
    display: flex;
    justify-content: center;
    gap: 3.2rem;
    
    .containerBody {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        > label {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    
        .ingredients {
            height: 4.8rem;
            width: 100%;
            
    
            display: flex;
            flex-wrap: wrap;
    
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            border-radius: 0.8rem;
        }
    }

    .inputComponent {
        margin-top: 0;
    }



`;