import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import { CelphoneInput } from 'features/account/components/CelphoneInput'

interface InputProps{
  setInputValue: (value: string) => void;
  inputValue: string;
  title: string;
}

export const Input: React.FC<InputProps> = ({setInputValue, inputValue, title}) => {


  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  return (
    <>
      <InputLabel shrink htmlFor="bootstrap-input" className="marginLeft" >
          <span> {title} </span>
      </InputLabel>
      <CelphoneInput 
        placeholder="Digite apenas números" 
        id="bootstrap-input"
        value={inputValue}
        onChange={onPhoneChange}
        className="cover"
        required/>
    </>
  )
}
