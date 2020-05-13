import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import animalsReducer from './animalsReducer';
import spAnimalsReducer from './spAnimalsReducer';

const allReducers = combineReducers({
	userLogin: loginReducer,
	userRegister: registerReducer,
	animalsData: animalsReducer,
	currentAnimal: spAnimalsReducer
});

export default allReducers;
