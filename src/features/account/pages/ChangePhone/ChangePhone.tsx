import React from 'react'

import { AppBar } from 'components/AppBar'
import { ProcessPageFooter } from 'components/ProcessPageFooter'
import { PageContainer } from 'components/PageContainer'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { ConfirmPopUp } from 'components/ConfirmPopUp'
import { ConfirmAlert } from 'components/ConfirmAlert'

import { Input } from 'components/Input'

import { maskPhone } from '_utils/mask/maskPhone'

import { useMask } from 'hooks/useMask'

import shapeCancel  from '_assets/img/shapeCancel.svg'

import { Button } from 'components/Button'
import {useStyles} from './ChangePhone.style'

import { useSelector, useDispatch } from 'react-redux'

import './ChangePhone.scss'

export const ChangePhone: React.FC = () => {

  const homeRoute = "/"

  const dispatch = useDispatch()

  const style = useStyles()

  const celphoneState = useSelector((state: any) => state.celphoneState) as any

  const [phoneInput, setPhoneInput] = useMask(maskPhone)

  const onCancelButtonClick = () => {
    window.location.reload();
  };

  const subtitle = 'Seu telefone atual é:'

  return (
    <div>
        <PageContainer> 
          <div>
            <div className="minHeight">
              <header>
                <AppBar
                    homeRoute={homeRoute}
                    action={
                      <Button
                        palette="secondary"
                        size="small"
                        className="buttonAppBar"
                        startIcon={<img src={shapeCancel} width={14} height={14} alt="Cancelar" />}
                        onClick={onCancelButtonClick}
                      >
                        <span className={style.cancelSpan}>Cancelar</span>
                      </Button>
                    }
                  />

                  <ProcessDescriptionHeader 
                    title="Editar telefone"
                    subtitle={subtitle}
                    description={celphoneState ? celphoneState : '(85) 00000.00000' }
                    />
              </header>

              <main>
                <div className="LabelInputContainer">
                  <Input setInputValue={setPhoneInput} inputValue={phoneInput} title={"Número de telefone"}/>
                </div>
              </main>
              
              <footer>
                  <div className="footer">
                      <ProcessPageFooter nextButtonOnClick={() => dispatch({type: 'OPEN_CONFIRM_POPUP'})}/>
                  </div>                         
              </footer>

              <ConfirmPopUp dataToConfirm={phoneInput} resetState={setPhoneInput}/>

              <ConfirmAlert />
            </div>
          </div>
        </PageContainer>     
    </div>
  )
}