export const tutoReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_TUTO':
            return true;

        case 'DELETE_TUTO': {
            return null;
        }

        default:
            return state;
    }
}