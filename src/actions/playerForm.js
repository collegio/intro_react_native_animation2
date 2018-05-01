export const playerFormUpdate = ({ prop, value }) => {

    return {
        type: 'PLAYER_FORM_UPDATE',
        field: { prop, value }
    }
};