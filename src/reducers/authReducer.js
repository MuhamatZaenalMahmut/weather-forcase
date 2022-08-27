const initialState = {
    onboarding: true,
    isError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                onboarding: false,
                isError: false
            };
        default:
            return state
    }
}