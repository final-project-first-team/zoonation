import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import animalsReducer from './animalsReducer';

const allReducers = combineReducers({
	userLogin: loginReducer,
	userRegister: registerReducer,
	animalsData: animalsReducer
});

export default allReducers;
