import { Container, InputSearch } from "./styles";

import { LuSearch } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

import { ButtonToOrder } from "../ButtonToOrder";
import { ButtonText } from "../ButtonText";


export function Header({ toAdmin }) {
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

            <ButtonToOrder icon={!toAdmin && LuClipboardList} title={toAdmin ? "Novo Prato" : "Pedidos (0)"}/>
            <ButtonText icon={LuLogOut} toBack />
        </Container>
    )
}