export const RESET_CURRENT_ITEM = 'RESET_CURRENT_ITEM';
export const resetCurrentItem = {
    type: RESET_CURRENT_ITEM
};

export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export function setCurrentItem(name, price, options) {
    return {
        type: SET_CURRENT_ITEM,
        payload: {
            name,
            price,
            options
        }
    };
}

export const TOGGLE_ITEM_OPTION = 'TOGGLE_ITEM_OPTION';
export function toggleItemOption(option) {
    return {
        type: TOGGLE_ITEM_OPTION,
        payload: {
            option
        }
    };
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = {
    type: ADD_TO_CART
};

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export function removeFromCart(index) {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            index
        }
    };
}

export const SET_CART_INDEX = 'SET_CART_INDEX';
export function setCartIndex(index) {
    return {
        type: SET_CART_INDEX,
        payload: {
            index
        }
    };
}

export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export function updateCartItem(index) {
    return {
        type: UPDATE_CART_ITEM,
        payload: {
            index
        }
    };
}

export const COMPLETE_PURCHASE = 'COMPLETE_PURCHASE';
export const completePurchase = {
    type: COMPLETE_PURCHASE
};