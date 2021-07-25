import React from 'react'
import {Button} from 'components/Button'
import OtpInput from 'react-otp-input';
import { Container, Typography, Box, Slide } from '@material-ui/core'
import { useStyles } from './ConfirmPopUp.style'
import confirmSVG from '_assets/img/icn-confirmar.svg'
import { useSelector, useDispatch } from 'react-redux';
import shapeCancel  from '_assets/img/shapeCancel.svg'


import './ConfirmPopUp.scss'

interface ConfirmPopUpProps{
  dataToConfirm: any;
  resetState: (arg: string) => void;
}

const ConfirmPopUp: React.FC<ConfirmPopUpProps> = ({ dataToConfirm, resetState }: any) => {

  const styles = useStyles()

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = React.useState("")

  const handlePassword = (e: string) => {
    const regExp = /[0-9]/g;
    e = e.replaceAll(regExp, '*')
    setInputValue(e)
  }
  
  let statePopUp = useSelector((state: any) => state.animationState) as any

  return (
    <Slide direction="up" in={statePopUp} mountOnEnter unmountOnExit>
      <Container className={styles.ConfirmPopUp}>
        <Typography variant="h6" className={styles.titlePassword}>
          Digite sua senha
        </Typography>
        <Typography variant="subtitle2" className={styles.subtitlePassword}>
          Para autenticar a operação
        </Typography>
        
        <Box className={styles.passwordContainer}>
          <OtpInput
            numInputs={4}
            value={inputValue}
            onChange={(e: string) => handlePassword(e)}
            className="InputContainer"
            isInputNum
          />
        </Box>

        <Box className="closeButtonContainer">
            <Button palette="secondary"
              size="small"
              className={styles.buttonPadding}
              startIcon={<img src={shapeCancel} alt="Cancelar" />}
              onClick={() => dispatch({type: 'CLOSE_CONFIRM_POPUP'})}
            >
              <span className="closeLabelConfirmPopUp"> Fechar </span> 
            </Button>
        </Box>
        
        <div className="alignCenterButton">
          <Box>
            <Button palette="secondary"
              size="small"
              startIcon={<img src={confirmSVG} height={18} width={18} className="iconConfirm" alt="Icone de Confirmação"/>}
              onClick={() => {
                dispatch({type: "CHANGE_PHONE", param: dataToConfirm})
                dispatch({type: "OPEN_CONFIRM_ALERT"})
                resetState('')
              }}
              className='ContainerButtonConfirm'
              id="buttonConfirm"
            >
              <span className={styles.confirmLabel}> Confirmar </span>
            </Button>
          </Box>
        </div>
      </Container>
    </Slide>
  )
}

export { ConfirmPopUp }
