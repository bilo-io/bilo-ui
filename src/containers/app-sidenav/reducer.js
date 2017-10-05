import { TOGGLE_SIDENAV } from './actions';

const initialState = {
    isOpen: false,
    items: []
}

const sidenavReducer = (state = initialState, { type, ...action }) => {
    switch (type) {
        case TOGGLE_SIDENAV:
            return {
                ...state,
               isOpen: !state.isOpen
            }
        default: return state;
    }
}

export default sidenavReducer;