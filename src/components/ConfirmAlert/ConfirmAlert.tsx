import {useStyles} from './ConfirmAlert.style'
import {Slide} from '@material-ui/core'
import ConfirmAlertSVG from '_assets/img/ConfirmAlertSVG.svg'

import {useSelector, useDispatch} from 'react-redux'

export const ConfirmAlert = () => {

  const style = useStyles()

  const dispatch = useDispatch()

  const confirmAlertAnimation = useSelector((state: any) => state.confirmAlertAnimation)

  return (
    <Slide direction="up" in={confirmAlertAnimation} mountOnEnter unmountOnExit>
      <div className={style.confirmContainer} onClick={() => {
        dispatch({type: "CLOSE_CONFIRM_ALERT"})
        dispatch({type: "CLOSE_CONFIRM_POPUP"})
        }}>
        <img src={ConfirmAlertSVG} className={style.imgConfirmAlert} alt="Senha Confirmada"/>
      </div>
    </Slide>
  )
}