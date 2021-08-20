/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import  ThunkMiddleware  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import cartItems from './ReducersForDD/cartItem';
const reducersofDaildeals = combineReducers({
    cartItems:cartItems
});
const storeofDailyDeals = createStore ( 
    reducersofDaildeals,
    composeWithDevTools(applyMiddleware(ThunkMiddleware))
)
export default storeofDailyDeals;
