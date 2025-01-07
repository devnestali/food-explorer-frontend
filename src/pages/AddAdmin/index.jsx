import { Container, Form, FieldImageInput, HeaderInputs, FieldTypeInput, BodyInputs } from "./styles";

import { Header } from "../../components/Header"
import { Wrapper } from "../../components/Wrapper"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

import { LuArrowLeft, LuArrowUpFromLine, LuChevronDown } from "react-icons/lu";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/Textarea";

import { useState } from "react";
import { showToasts } from "../../utils/toasts";

export function AddAdmin() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const options = [
        { id: 1, label: "Refeição", value: "dish"},
        { id: 2, label: "Sobremesa", value: "dessert"},
        { id: 3, label: "Bebida", value: "drink"},
    ];
    
    const [selectedCategory, setSelectedCategory] = useState(options[0].value);

    function inputChecker() {
        if(!title) {
            showToasts.error("Preencha o nome do prato");
            return false;
        };

        if(!ingredients.length) {
            showToasts.error("É necessário pelo menos 1 ingrediente");
            return false;
        };

        if(!price) {
            showToasts.error("Preencha o preço");
            return false;
        };

        if(!description) {
            showToasts.error("Preencha a descrição");
            return false;
        };

        if(newIngredient) {
            showToasts.error("Um marcador foi preenchido, mas não foi adicionado. Adicione-o, ou deixe o campo vazio.");
            return false;
        };

        return true;
    };
    

    function handleAddIngredient() {
        setIngredients([...ingredients, newIngredient]);
        setNewIngredient("");
    };

    function handleRemoveIngredient(deletedIngredient) {
        const filteredIngredients = ingredients.filter(ingredient => ingredient !== deletedIngredient);

        setIngredients(filteredIngredients);
    };

    async function handleCreateMeal() {
        const passedChecker = inputChecker();

        return console.log(passedChecker);
    };


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
                                            <LuArrowUpFromLine /> 
                                            <h3>Selecionar Imagem</h3>
                                        </div>
                                    </label>
                                </div>
                            </FieldImageInput>
                            
                            <Input 
                                title="Nome" 
                                placeholder="Ex.: Salada Ceasar" 
                                toAdmin
                                onChange={e => setTitle(e.target.value)} 
                            />
                            
                            <FieldTypeInput>
                                <label htmlFor="typeOfMeal">Categoria</label>
                                <LuChevronDown />
                                <select id="typeOfMeal" onChange={e => setSelectedCategory(e.target.value)}>
                                    {
                                        options.map(option => (
                                            <option 
                                                key={option.id} 
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))
                                    }
                                </select>
                            </FieldTypeInput>
                        </HeaderInputs>

                        <BodyInputs>
                            <div className="containerBody">
                                <label htmlFor="ingredients">Ingredientes</label>
                                <div className="ingredients">
                                    {
                                        ingredients.map((ingredient, i) => (
                                            <IngredientItem 
                                                key={i}
                                                value={ingredient}
                                                onClick={() => handleRemoveIngredient(ingredient)}
                                            />
                                        ))
                                    }

                                    <IngredientItem 
                                        placeholder="Adicionar" 
                                        isNew
                                        value={newIngredient}
                                        onChange={e => setNewIngredient(e.target.value)}
                                        onClick={handleAddIngredient} 
                                    />
                                </div>
                            </div>
    
                            <Input 
                                title="Preço" 
                                placeholder="R$ 00,00" 
                                toAdmin
                                onChange={e => setPrice(e.target.value)} 
                            />
                        </BodyInputs>
                        
                        <Textarea 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)} 
                        />

                        <div className="buttons">
                            <Button 
                                title="Salvar alterações" 
                                toEdit
                                onClick={handleCreateMeal}
                            />
                        </div>
                    </Form>
                </Wrapper>

                <Footer />
            </main>
        </Container>
    )
}