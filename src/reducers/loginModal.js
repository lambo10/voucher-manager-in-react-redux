const loginModal = (state = false,action) => {
    switch (action.type){
        case 'LOGIN_MODAL_ACTIVE':
            return !state;
        default:
            return state;
    }
}

export default loginModal;