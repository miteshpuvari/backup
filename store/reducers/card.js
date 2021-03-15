import { ADD_TO_CART } from "../actions/card";
import CartItem from '../../models/card-item';

const initialState = {
    items: [],
    totalAmount: 19.191111
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            
            let updatedOrNewCartItem;

            if(state.items[addedProduct.id]) {
                // already have item in the card
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
            }else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
            }
            return {
                ...state,
                items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},  // this is venila javascript using that you can add or access daynamic property
                totalAmount: state.totalAmount + prodPrice
            };
    }
    return state;
};