import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from 'components/Button'
import {Container, Typography, Box} from '@material-ui/core'
import {useStyles} from './ConfirmPopUp.style'
import confirmSVG from '_assets/img/icn-confirmar.svg'

import './ConfirmPopUp.scss'

const ConfirmPopUp: React.FC = () => {

  const styles = useStyles()

  let firstInputPassword : HTMLInputElement | null
  let secondInputPassword: HTMLInputElement | null
  let thirdInputPassword: HTMLInputElement | null
  let fourthInputPassword: HTMLInputElement | null

  document.querySelector(".inputPassword")?.addEventListener("keypress", (evt: any) => {
    if (evt.which !== 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
    // 0 for null values
    // 48-57 for 0-9 numbers
  });

  const setFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputID = e.target.id
    const checkIfCanJumpToNextInput = e.currentTarget.value

    if(checkIfCanJumpToNextInput){
      switch (inputID) {
        case 'first':
            secondInputPassword?.focus()
            break;
        case 'second':
            thirdInputPassword?.focus()
            break;
        case 'third':
            fourthInputPassword?.focus()
            break;      
      }
    }else{
      switch (inputID) {
        case 'second':
            firstInputPassword?.focus()
            break;
        case 'third':
            secondInputPassword?.focus()
            break;
        case 'fourth':
            thirdInputPassword?.focus()
            break;    
    }
  }
  }

  const onCloseButtonClick = () => {
    const containerPopUp = document.getElementById("displayConfirmPopUp")

    if (containerPopUp) containerPopUp.style.display = 'none'
  }
  
  return (
    <Container className={styles.ConfirmPopUp} id="displayConfirmPopUp">
      <Typography variant="h6" className={styles.titlePassword}>
        Digite sua senha
      </Typography>
      <Typography variant="subtitle1" className={styles.subtitlePassword}>
        Para autenticar a operação
      </Typography>
      <Box className={styles.passwordContainer}>
        <input 
          type="text" 
          maxLength={1} 
          onChange={e => setFocus(e)} 
          required 
          id="first"
          className="inputPassword" 
          ref={ (ref) => firstInputPassword = ref }
          />
        <input 
          type="text" 
          maxLength={1} 
          onKeyDown={e => console.log(e.key)}
          onChange={e => setFocus(e)} 
          required 
          id="second"
          className="inputPassword" 
          ref={ (ref) => secondInputPassword = ref }
          />
        <input 
          type="text" 
          maxLength={1} 
          onKeyDown={e => console.log(e.key)}
          onChange={e => setFocus(e)} 
          required
          id="third"
          className="inputPassword" 
          ref={ (ref) => thirdInputPassword = ref }
          />
          
        <input 
          type="text" 
          maxLength={1} 
          id="fourth"
          onKeyDown={e => console.log(e.key)}
          onChange={e => setFocus(e)} 
          required 
          className="inputPassword" 
          ref={ (ref) => fourthInputPassword = ref }
          />

          <Box className="closeButtonContainer">
            <Button palette="secondary"
              size="medium"
              startIcon={<CloseIcon fontSize="large" color="primary" />}
              onClick={onCloseButtonClick}
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
            onClick={onCloseButtonClick}
          >
            Confirmar
          </Button>
        </Box>
      </div>
    </Container>
  )
}

export { ConfirmPopUp }
