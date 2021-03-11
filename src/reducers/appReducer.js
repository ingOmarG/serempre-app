
const initialState = {
    Initfinish: {
        id: 1,
        price: 0
    },
    Initwarranty: {
        id: 1,
        price: 0
    },
    Initfeatures: {
        id: 1,
        price: 0
    },
    Initialprice: 295.95,
    FinalPrice: 0
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'finish':
            return {
                ...state,
                Initfinish: { ...action.payload }
            }
        case 'features':
            return {
                ...state,
                Initfeatures: { ...action.payload }
            }
        case 'warranty':
            return {
                ...state,
                Initwarranty: { ...action.payload }
            }
        case 'price':
            return {
                ...state,
                FinalPrice: action.payload
            }
        default:
            return state;
    }
}