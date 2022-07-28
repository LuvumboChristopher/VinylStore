import React, { useState } from 'react'
import { SingupInputsContainer } from '../style'

const FormInput = (props) => {
  
  const [focus, setFocus] = useState(false)
  
  return (
    <SingupInputsContainer>
      <input
        {...props}
        onChange={props.onChange}
        onBlur={() => setFocus(true)}
        onFocus={
          props.name === 'confirmedPassword' ? setFocus(true) : undefined
        }
        focus={focus.toString()}
        className='singup_input'
      />
      <span className='error_message_singup'>{props.errormessage}</span>
    </SingupInputsContainer>
  )
}

export default FormInput

