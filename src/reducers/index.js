import { combineReducers } from 'redux';
import MMKVStorage from 'react-native-mmkv-storage';
import auth from './authReducer';
import weather from './weatherReducer';

const appReducer = combineReducers({
    auth,
    weather
})

export const LogOut = () => ({ type: 'SIGN_OUT' })

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
        const storage = new MMKVStorage.Loader().initialize()
        storage.clearStore()
    }
    return appReducer(state, action)
}

export default rootReducer