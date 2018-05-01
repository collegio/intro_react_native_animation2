import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import playersReducer from '../reducers/players';
import filtersReducer from '../reducers/filters';
import selectedPlayerReducer from '../reducers/selectedPlayer';
import authReducer from '../reducers/auth';
import playerFormReducer from '../reducers/playerForm';

export default () => {

    const config = {
        key: 'primary',
        storage: AsyncStorage,
        whitelist: ['selectedPlayer']
    }

    const store = createStore(
        persistCombineReducers(config, {
            players: playersReducer,
            filters: filtersReducer,
            selectedPlayer: selectedPlayerReducer,
            auth: authReducer,
            playerForm: playerFormReducer
        }),
        {},
        applyMiddleware(ReduxThunk)
    );

    persistStore(store);

    return store;
}