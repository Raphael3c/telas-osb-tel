
export const confirmPopUpAnimation = (state: any = false, action: any) => {
  switch (action.type){
    case 'OPEN':
      return true
    case 'CLOSE':
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