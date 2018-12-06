import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types'

const initialState = {
    items: [],
    loading: false
}
export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: actions.payload,
                loading: false
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== actions.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [actions.payload, ...state.items]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}