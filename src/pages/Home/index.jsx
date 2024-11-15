import { Container, MainHeader } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";

import ButtonImage from '../../assets/mainImage.png';

export function Home() {
    return (
        <Container>
            <Header />

            <main>
                <Wrapper>
                    <MainHeader>
                        <img src={ButtonImage} alt="Biscoitos" />

                        <div className="mainHeaderTitle">
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </MainHeader>
                </Wrapper>
            </main>
        </Container>
    )
}