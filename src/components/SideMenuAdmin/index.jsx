import { Container, Header } from "./styles";

import { Wrapper } from "../Wrapper";
import { Footer } from "../Footer";

import { LuX, LuSearch } from "react-icons/lu";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SideMenuAdmin() {
    const { signOut } = useAuth();
    const navigate = useNavigate();
    
    function handleCloseEvent() {
        navigate('/');
    };

    function handleSignOutEvent() {
        signOut();
        navigate('/');
    }

    function handleNewMeal() {
        navigate('/add');
    }
    
    return (
        <Container>
            <Header>
                <span onClick={handleCloseEvent}><LuX /></span>
                <h2>Menu</h2>
            </Header>

            <main>
                <Wrapper>
                    <div className="search-container">
                        <LuSearch />
                        <input 
                            placeholder="Busque por refeição, sobremesa e bebida"
                        />
                    </div>

                    <button type="button" onClick={handleNewMeal}>Novo Prato</button>
                    <button type="button" onClick={handleSignOutEvent}>Sair</button>
                </Wrapper>
            
                <Footer />
            </main>
                
        </Container>
    )
}