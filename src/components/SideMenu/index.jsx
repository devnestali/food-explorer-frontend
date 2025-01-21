import { Container, Header } from "./styles";

import { Wrapper } from "../Wrapper";

import { LuX, LuSearch } from "react-icons/lu";
import { Footer } from "../Footer";

export function SideMenu() {
    return (
        <Container>
            <Header>
                <span><LuX /></span>
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

                    <button type="button">Sair</button>
                </Wrapper>
            
                <Footer />
            </main>
                
        </Container>
    )
}