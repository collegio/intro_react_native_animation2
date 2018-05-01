// the default items that we can possibly filter by
const filtersDefaultState = {
    text: '',
    sport_type: 'all',
    skill_level: 'all',
    sort_by: 'name'
};

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_FILTER_TYPE':
            return {
                ...state,
                sport_type: action.sport_type
            };
        case 'SORT_BY_NAME':
            return {
                ...state,
                sort_by: 'name'
            };
        case 'SORT_BY_SKILL':
            return {
                ...state,
                sort_by: 'skill_level'
            };
        default:
            return state;
    }
};