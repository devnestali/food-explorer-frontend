import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }

    body, button {
        font-family: 'Poppins', serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        --webkit-font-smoothing: antialiased;
    }

    input, textarea, p {
        font-family: 'Roboto', serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        --webkit-font-smoothing: antialiased;
    }
    
    button, a {
        transition: all .4s;
        cursor: pointer;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: .8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.DARK_100};
        border-radius: 2rem;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

`;