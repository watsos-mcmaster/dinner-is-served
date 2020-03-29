export const RESET_CURRENT_ITEM = 'RESET_CURRENT_ITEM'
export const resetCurrentItem = {
    type: RESET_CURRENT_ITEM
}

export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'
export function setCurrentItem(name, price) {
    return {
        type: SET_CURRENT_ITEM,
        payload: {
            name: name,
            price: price
        }
    };
}

export const TOGGLE_ITEM_OPTION = 'TOGGLE_ITEM_OPTION'
export function toggleItemOption(option) {
    return {
        type: TOGGLE_ITEM_OPTION,
        payload: {
            option: option
        }
    };
}

export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = {
    type: ADD_TO_CART
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export function removeFromCart(itemIndex) {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            index: itemIndex
        }
    };
}

export const COMPLETE_PURCHASE = 'COMPLETE_PURCHASE'
export const completePurchase = {
    type: COMPLETE_PURCHASE
}