import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import animalsReducer from './animalsReducer';
import spAnimalsReducer from './spAnimalsReducer';
import zooReducer from './zooReducer';
import loginStatusReducer from './loginStatusReducer';
import storageReducer from './storageReducer';
import priceReducer from './priceReducer';
import { itemsCartReducer, amountCartReducer, priceCartReducer } from './feedsCartReducer';
import { trayReducer } from './trayReducers';
import { saveAmountReducer } from './adoptRateReducer';
import zooPartnerReducer from './zooPartnerReducer';
import { adoptDataReducer } from './adoptDataReducer';

const allReducers = combineReducers({
	currentUser: loginReducer,
	userRegister: registerReducer,
	animalsData: animalsReducer,
	currentAnimal: spAnimalsReducer,
	zooData: zooReducer,
	isLoggedIn: loginStatusReducer,
	feedsStorage: storageReducer,
	feedsPrice: priceReducer,
	itemsHolder: itemsCartReducer,
	amountHolder: amountCartReducer,
	priceHolder: priceCartReducer,
	trayHolder: trayReducer,
	amountHolderSave: saveAmountReducer,
	currentZoo: zooPartnerReducer,
	currentAdopt: adoptDataReducer
});

export default allReducers;
