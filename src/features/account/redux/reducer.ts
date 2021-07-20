export const confirmPopUpAnimation = (state: any = false, action: any) => {
  switch (action.type){
    case 'OPEN_CONFIRM_POPUP':
      return true
    case 'CLOSE_CONFIRM_POPUP':
      return false
    default:
      return state
  } 
}

export const confirmAlertAnimation = (state: any = false, action: any) => {
  switch (action.type){
    case 'OPEN_CONFIRM_ALERT':
      return true
    case 'CLOSE_CONFIRM_ALERT':
      return false
    default:
      return state
  } 
}

export const celphoneState = (state: any = "(85) 0 0000-00000", action: any) => {
  const param = action.param;
  switch (action.type){
    case 'CHANGE_PHONE':
      return param
    
    case 'PHONE_INVALID':
      return state
    
    default:
      return state
  }
}

