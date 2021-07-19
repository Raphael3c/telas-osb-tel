import { combineReducers, createStore } from "redux";

import { confirmPopUpAnimation, celphoneState } from 'features/account/redux/reducer'

 const combineStore = combineReducers({
  animationState: confirmPopUpAnimation,
  celphoneState: celphoneState,
});

export const store = createStore(combineStore)