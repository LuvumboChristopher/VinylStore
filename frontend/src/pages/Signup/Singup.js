import React from 'react'
import Form from './components/Form'
import '../../css/singup.css'

const Singup = () => {
  
  return (
    <section id='singup'>
      <div className='singupContainer'>
        <div className='singup_img'></div>
        <div className='singup_form_container'>
          <div className='singup_section'>
            <header className='singup_header'>
              <h1 className='auth_title'>S'inscrire</h1>
              <p className='auth_subtitle'>formulaire d'inscription</p>
            </header>
            <Form/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Singup