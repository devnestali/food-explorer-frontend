import { Container, InputSearch } from "./styles";

import { LuSearch } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

import { ButtonToOrder } from "../ButtonToOrder";
import { ButtonText } from "../ButtonText";
import { useNavigate } from "react-router-dom";


export function Header({ toAdmin }) {
    const navigate = useNavigate();

    function handleClickToAddAdmin() {
        navigate("/add")
    }
    
    
    return (
        <Container>
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
                <div className="text-container">
                    <a>food explorer</a>
                    {toAdmin && <p>admin</p>}
                </div>
            </div>

            <InputSearch>
                <LuSearch />
                <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </InputSearch>

            <ButtonToOrder icon={!toAdmin && LuClipboardList} 
                           title={toAdmin ? "Novo Prato" : "Pedidos (0)"} 
                           onClick={toAdmin ? handleClickToAddAdmin : ""}
            />
            <ButtonText icon={LuLogOut} toBack />
        </Container>
    )
}