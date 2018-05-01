const selectedDefaultState = {
    curIndex: 0
};

export default (state = selectedDefaultState, action) => {
    switch (action.type) {
        case 'INCREMENT_INDEX':
            return {
                curIndex: state.curIndex + 1
            };

        default:
            return state;
    }
};