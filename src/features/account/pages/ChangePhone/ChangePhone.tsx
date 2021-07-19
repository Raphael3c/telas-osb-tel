import React from 'react'

import { AppBar } from 'components/AppBar'
import { ProcessPageFooter } from 'components/ProcessPageFooter'
import { PageContainer } from 'components/PageContainer'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { ConfirmPopUp } from 'components/ConfirmPopUp'
import { CelphoneInput } from 'components/CelphoneInput'

import { maskPhone } from '_utils/mask/maskPhone'

import { useMask } from 'hooks/useMask'

import { useHistory } from 'react-router-dom'
import { Button } from 'components/Button'
import { Close } from "@material-ui/icons";
import InputLabel from '@material-ui/core/InputLabel'

import { useSelector, useDispatch } from 'react-redux'

import './ChangePhone.scss'

export const ChangePhone: React.FC = () => {

  const history = useHistory()

  const homeRoute = "/"

  const dispatch = useDispatch()

  const celphoneState = useSelector((state: any) => state.celphoneState) as any

  const [phoneInput, setPhoneInput] = useMask(maskPhone)

  const onCancelButtonClick = () => {
    history.replace("/");
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneInput(event.target.value);

  const subtitle = 'Seu telefone atual é'

  return (
    <div>
        <PageContainer> 
          <form>
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
                    description={celphoneState ? celphoneState : '(85) 0 0000-00000' }
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
                    value={phoneInput}
                    onChange={onPhoneChange}
                    className="cover"
                    required/>
                </div>
              </main>
              
              <section>
                  <div className="footer">
                      <ProcessPageFooter nextButtonOnClick={() => dispatch({type: 'OPEN'})}/>
                  </div>     
                    
                  <ConfirmPopUp dataToConfirm={phoneInput} resetState={setPhoneInput}/>
              </section>
            </div>
          </form>
        </PageContainer>     
    </div>
  )
}