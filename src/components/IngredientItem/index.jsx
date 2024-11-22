import { Container } from './styles'

import { LuPlus, LuX } from 'react-icons/lu'

export function IngredientItem({ onClick, isNew, ...rest }) {
    return (
        <Container data-isnew={isNew}>
            <input 
                type="text"
                id='ingredient' 
                readOnly={!isNew}
                {...rest}
            />
            <button 
                type='button'
                id='ingredient'
                onClick={onClick}
            >
                {isNew ? <LuPlus /> : <LuX />}
            </button>
        </Container>
    )
}