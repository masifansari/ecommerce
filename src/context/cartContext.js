import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () =>{
    let loaclCartData = localStorage.getItem("peopleCart");
    // if(loaclCartData=== []) {
        // return [];
    // }else {
        // return JSON.parse(loaclCartData);
    // }
    const parsedData = JSON.parse(loaclCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
};

const initialState = {
   
    cart : getLocalCartData(),
    total_item : "",
    total_price : "",
    shipping_fee : 50000,
}

const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id,color,amount,product) =>{
        dispatch({ type : 'ADD_TO_CART', payload : {id,color,amount,product}})
    }

    //increment and decrement product in cartItem
    const setDecrease = (id) =>{
        dispatch({ type : "SET_DECREMENT", payload : id})
    }

    const setIncrease = (id) =>{
        dispatch({ type : "SET_INCREMENT", payload : id})
    }

    const removeItem = (id) =>{
        dispatch({ type : 'REMOVE_ITEM', payload : id})
    }

    //clear cart
    const clearCart = () =>[
        dispatch({ type : "CLEAR_CART"})
    ]

   // add the data in localStorage
    useEffect(() =>{
        // dispatch({ type : 'CART_TOTAL_ITEM'});
        // dispatch({ type : "CART_TOTAL_PRICE"})
        dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
        localStorage.setItem("peopleCart", JSON.stringify(state.cart))
    },[state.cart]);

    return (
    <CartContext.Provider value={{...state, addToCart, removeItem, clearCart,setDecrease,setIncrease}}>
        {children}
    </CartContext.Provider>
    )
};

const useCartContext = () =>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext};