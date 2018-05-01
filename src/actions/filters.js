export const setFilterText = (text = '') => ({
    type: 'SET_FILTER_TEXT',
    text
});

export const setFilterType = (sport_type = 'all') => ({
    type: 'SET_FILTER_TYPE',
    sport_type
});

export const sortByName = () => ({
    type: 'SORT_BY_NAME'
});

export const sortBySkill = () => ({
    type: 'SORT_BY_SKILL'
});