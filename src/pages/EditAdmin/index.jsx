import { Container, Form, FieldImageInput, HeaderInputs, FieldTypeInput, BodyInputs } from "./styles";

import { Header } from "../../components/Header"
import { Wrapper } from "../../components/Wrapper"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { LuArrowLeft, LuArrowUpFromLine, LuChevronDown } from "react-icons/lu";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/Textarea";

export function EditAdmin() {
    const options = [
        { id: 1, label: "Refeição"},
        { id: 2, label: "Sobremesa"},
        { id: 3, label: "Bebida"},
    ]

    return (
        <Container>
            <Header toAdmin/>

            <main>
                <Wrapper>
                    <ButtonText icon={LuArrowLeft} title="voltar" toBack />
                    <h2>Adicionar prato</h2>
                    <Form>
                        <HeaderInputs>
                            <FieldImageInput>
                                <p className="inputImage">Imagem do prato</p>
                                <div className="dishImageInput">
                                    <label htmlFor="inputImage">
                                        <input type="file" id="inputImage" accept="image/*" />
                                        <div className="text-container">
                                            <LuArrowUpFromLine /> Selecionar imagem
                                        </div>
                                    </label>
                                </div>
                            </FieldImageInput>
                            
                            <Input title="Nome" placeholder="Salada Ceasar" toAdmin />
                            
                            <FieldTypeInput>
                                <label htmlFor="typeOfMeal">Categoria</label>
                                <LuChevronDown />
                                <select id="typeOfMeal">
                                    {
                                        options.map(option => (
                                            <option key={option.id} value={option.id}>{option.label}</option>
                                        ))
                                    }
                                </select>
                            </FieldTypeInput>
                        </HeaderInputs>

                        <BodyInputs>
                            <div className="containerBody">
                                <label htmlFor="ingredients">Ingredientes</label>
                                <div className="ingredients">
                                    <IngredientItem value="Arroz"/>
                                    <IngredientItem placeholder="Adicionar" isNew />
                                </div>
                            </div>
    
                            <Input title="Preço" placeholder="R$ 00,00" toAdmin />
                        </BodyInputs>
                        
                        <Textarea placeholder="A Salada César é uma opção refrescante para o verão." />

                        <div className="buttons">
                            <Button title="Excluir prato" toDelete />
                            <Button title="Salvar alterações" disabled />
                        </div>
                    </Form>
                </Wrapper>
            </main>
        </Container>
    )
}