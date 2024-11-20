import { Container, MainHeader, Meals } from "./styles";

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import { Meal } from '../../components/Meal'
import { Footer } from '../../components/Footer'

import mainImage from '../../assets/mainImage.png'

import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

export function HomeAdmin() {
    return (
        <Container>
            <Header toAdmin />

            <main>
                <Wrapper>
                    <MainHeader>
                        <img src={mainImage} alt="Biscoitos" />

                        <div className="mainHeaderTitle">
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </MainHeader> 
                    <h2>Refeições</h2>
                    <Meals>
                        <a href=""><LuChevronRight /></a>
                        <Meal />
                        <Meal />
                        <Meal />
                        <Meal />
                        <Meal />
                        <a href=""><LuChevronLeft /></a>
                    </Meals>
                    
                    <h2>Sobremesas</h2>
                    <Meals>
                        <a href="#"><LuChevronRight /></a>
                        <Meal />
                        <Meal />
                        <Meal />
                        <Meal />
                        <a href="#"><LuChevronLeft /></a>
                    </Meals>
                    
                    <h2>Bebidas</h2>
                    <Meals>
                        <a href="#"><LuChevronRight /></a>
                        <Meal />
                        <Meal />
                        <Meal />
                        <Meal />
                        <a href="#"><LuChevronLeft /></a>
                    </Meals>

                </Wrapper>
                
                <Footer />
            </main>
        </Container>
    )
}