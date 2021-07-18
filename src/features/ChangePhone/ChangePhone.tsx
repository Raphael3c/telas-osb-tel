import { AppBar } from 'components/AppBar'
import { ProcessPageFooter } from 'components/ProcessPageFooter'
import { useHistory } from 'react-router-dom'
import { PageContainer } from 'components/PageContainer'
import InputBase from '@material-ui/core/InputBase';
import { alpha, styled } from '@material-ui/core/styles';
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { Button } from 'components/Button'
import { Close } from "@material-ui/icons";
import {ConfirmPopUp} from 'components/ConfirmPopUp'

import InputLabel from '@material-ui/core/InputLabel'
import React from 'react'

import './ChangePhone.scss'

//Componentizar isso
const CelphoneInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#ffff',
    border: '1px solid #C4C4C4',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


export const ChangePhone: React.FC = () => {

  const history = useHistory()

  const homeRoute = "/"

  const onCancelButtonClick = () => {
    history.replace("/");
  };

  const onNextButtonClick = () => {
    const containerPopUp = document.getElementById("displayConfirmPopUp")

    if (containerPopUp) containerPopUp.style.display = 'block'
  }

  const subtitle = 'Seu telefone atual é'
  const description = '(85) 00000.00000'

  return (
    <div>
        <PageContainer> 
          <div className="minHeight">
            <header>
              <AppBar
                  homeRoute={homeRoute}
                  action={
                    <Button
                      palette="secondary"
                      size="small"
                      startIcon={<Close color="primary" />}
                      onClick={onCancelButtonClick}
                    >
                      Cancelar
                    </Button>
                  }
                />

                <ProcessDescriptionHeader 
                  title="Editar Telefone"
                  subtitle={subtitle}
                  description={description}
                  />
            </header>

            <main>
              {/*Componentizar depois*/}
              <div className="LabelInputContainer">
                <InputLabel shrink htmlFor="bootstrap-input" className="marginLeft" >
                  Número de telefone
                </InputLabel>
                <CelphoneInput 
                  placeholder="Digite apenas números" 
                  id="bootstrap-input"
                  className="cover"/>
              </div>
            </main>

            <footer>        
                <ProcessPageFooter nextButtonOnClick={onNextButtonClick}/>
            </footer>

              <ConfirmPopUp />
          </div>
        </PageContainer>     
    </div>
  )
}