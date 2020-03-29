import produce from 'immer';
import * as Actions from './actions';

const initialState = {
    currentItem: {
        name: "",
        price: 0,
        options: []
    },
    cart: [],
    purchase: []
}

export default (state = initialState, action) =>
    produce(state, draft => {
        const { type, payload } = action;
        switch(type) {
            case Actions.RESET_CURRENT_ITEM:
                draft.currentItem = {
                    name: "",
                    options: []
                };
                break;
            case Actions.SET_CURRENT_ITEM:
                draft.currentItem.name = payload.name;
                draft.currentItem.price = payload.price;
                break;
            case Actions.TOGGLE_ITEM_OPTION:
                const index = draft.currentItem.options.indexOf(payload.option)
                if ( index < 0 ) {
                    draft.currentItem.options.push(payload.option);
                } else {
                    draft.currentItem.options.splice(index, 1);
                }
                break;
            case Actions.ADD_TO_CART:
                draft.cart.push(draft.currentItem);
                break;
            case Actions.REMOVE_FROM_CART:
                draft.cart.splice(payload.itemIndex, 1);
                break;
            case Actions.COMPLETE_PURCHASE:
                draft.purchase = draft.cart;
                draft.cart = [];
                break;
            default:
                return draft;
        }
    });