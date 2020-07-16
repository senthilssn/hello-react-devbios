import { handleActions } from 'redux-actions';

export const Types = {
    GET_ALL_BIOS_REQUEST:'GET_ALL_BIOS_REQUEST',
    GET_ALL_BIOS_SUCCESS:'GET_ALL_BIOS_SUCCESS',
    ADD_BIO: 'ADD_BIO'
}

const devActions = {
    getAllBiosRequestActionCreator: () => ({
        type: Types.GET_ALL_BIOS_REQUEST
    }),
    getAllBiosSuccessActionCreator: (developers) => ({
        type: Types.GET_ALL_BIOS_SUCCESS,
        developers
    }),
    addBioActionCreator: (developer) => ({
        type: Types.ADD_BIO,
        developer
    }),
    reducer: handleActions({
        [Types.GET_ALL_BIOS_REQUEST]: (state) => ({
            state
        }),
        [Types.GET_ALL_BIOS_SUCCESS]: (state, action) => ({
            ...state,
            developers: action.developers
        }),
        [Types.ADD_BIO]: (state, action) => ({
            ...state,
            developers: [...state.developers, action.developer]
        })
    },{//initial state
        developers:[]
    })
}

export default devActions;