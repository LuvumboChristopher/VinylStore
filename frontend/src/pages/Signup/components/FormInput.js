import React, { useState } from 'react'

const FormInput = (props) => {
  
  const [focus, setFocus] = useState(false)
  
  return (
    <div className='formInput_container'>
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
    </div>
  )
}

export default FormInput

