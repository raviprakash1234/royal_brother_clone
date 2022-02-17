import { createStore, combineReducers, applyMiddleware } from "redux";
// import { bikeReducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { bikeReducer } from "./reducer";

const reducer = combineReducers({
  bikes: bikeReducer,
});
let initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
