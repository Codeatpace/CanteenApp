// context and reducer used to together to reduce multiple sendings of same data to upcoming parents
import React, { createContext, useContext, useReducer } from 'react'

// we will be using useREDUCER, useCONTEXT, creatCONTEXT

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD': return [...state, {id:action.id, name:action.name, qty:action.qty, price:action.price, img:action.img}]
        case 'REMOVE': let newArr = [...state];
        newArr.splice(action.index,1);
        return newArr;
        case 'DROP': let empArr = []
        return empArr
        default: console.log("Error in Reducer");
    }
}

export const CartProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, [])   // 2 parameters, dispatchfunction, initialvalueofstate
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);