import { combineReducers, createStore } from "redux";

import { confirmPopUpAnimation, celphoneState, confirmAlertAnimation} from 'features/account/redux/reducer'

 const combineStore = combineReducers({
  animationState: confirmPopUpAnimation,
  celphoneState: celphoneState,
  confirmAlertAnimation: confirmAlertAnimation,
});

export const store = createStore(combineStore)