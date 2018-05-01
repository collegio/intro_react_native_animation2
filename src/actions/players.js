import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const getPlayers = () => {
    return (dispatch) => {
        firebase.database().ref('/players')
            .on('value', (snapshot) => {
                dispatch({
                    type: 'GET_PLAYERS',
                    players: snapshot.val()
                });
            });
    };
};

export const addPlayer = ({ name, message = '', sport_type = 'hockey', skill_level = 'basic', gender = 'Male' } = {}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/players')
            .push({ name, message, sport_type, skill_level, gender, user_id: currentUser.uid })
            .then(() => {
                dispatch({
                    type: 'PLAYER_FORM_RESET'
                });

                Actions.pop();
            });
    };   
};

export const updatePlayer = ({ name, message = '', sport_type = 'hockey', skill_level = 'basic', gender = 'Male', uid } = {}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref('/players/'+uid)
            .set({ name, message, sport_type, skill_level, gender, user_id: currentUser.uid })
            .then(() => {
                dispatch({
                    type: 'PLAYER_FORM_RESET'
                });

                Actions.pop();
            });
    };
};
  
export const deletePlayer = (uid) => {

    return () => {
        firebase.database().ref('/players/'+uid)
            .remove()
            .then(() => {
                Actions.main({ type: 'reset' })
            });
    };
};