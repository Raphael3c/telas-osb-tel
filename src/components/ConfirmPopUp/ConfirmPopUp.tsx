import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from 'components/Button'
import OtpInput from 'react-otp-input';
import { Container, Typography, Box, Slide } from '@material-ui/core'
import { useStyles } from './ConfirmPopUp.style'
import confirmSVG from '_assets/img/icn-confirmar.svg'
import { useSelector, useDispatch } from 'react-redux';

import './ConfirmPopUp.scss'

interface ConfirmPopUpProps{
  dataToConfirm: any;
  resetState: (arg: string) => void;
}

const ConfirmPopUp: React.FC<ConfirmPopUpProps> = ({ dataToConfirm, resetState }: any) => {

  const styles = useStyles()

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = React.useState("")
  
  let statePopUp = useSelector((state: any) => state.animationState) as any

  return (
    <Slide direction="up" in={statePopUp} mountOnEnter unmountOnExit>
      <Container className={styles.ConfirmPopUp}>
        <Typography variant="h6" className={styles.titlePassword}>
          Digite sua senha
        </Typography>
        <Typography variant="subtitle1" className={styles.subtitlePassword}>
          Para autenticar a operação
        </Typography>
        
        <Box className={styles.passwordContainer}>
          <OtpInput
            numInputs={4}
            value={inputValue}
            onChange={setInputValue}
            isInputSecure
            isInputNum
            className="InputContainer"
          />

          <Box className="closeButtonContainer">
            <Button palette="secondary"
              size="medium"
              startIcon={<CloseIcon fontSize="large" color="primary" />}
              onClick={() => dispatch({type: 'CLOSE'})}
            >
              Fechar
            </Button>
            </Box>
        </Box>
        
        <div className="alignCenterButton">
          <Box>
            <Button palette="secondary"
              size="medium"
              startIcon={<img src={confirmSVG} height={23} width={23} className="iconeConfirm" alt="Icone de Confirmação"/>}
              onClick={() => {
                dispatch({type: "CHANGE_PHONE", param: dataToConfirm})
                dispatch({type: "CLOSE"})
                resetState('')
              }}
            >
              Confirmar
            </Button>
          </Box>
        </div>
      </Container>
    </Slide>
  )
}

export { ConfirmPopUp }
