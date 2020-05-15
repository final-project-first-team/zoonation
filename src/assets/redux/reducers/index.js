import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import animalsReducer from './animalsReducer';
import spAnimalsReducer from './spAnimalsReducer';
import zooReducer from './zooReducer';

const allReducers = combineReducers({
	currentUser: loginReducer,
	userRegister: registerReducer,
	animalsData: animalsReducer,
	currentAnimal: spAnimalsReducer,
	zooData: zooReducer
});

export default allReducers;
