import React from 'react'
import '../../../../css/contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact_container'>
        <div className='contact_left'>
          <div className='contact_left_container'>
            <header className='contact_header'>
              <h1 className='contact_title'>Contact & Accés</h1>
              <p className='contact_subtitle'>Formulaire de contact</p>
            </header>
            <div className='contact_section'>
              <form className='contact_form' action='#'>
                <input type='text' name='Nom' id='nom' placeholder='Nom' />
                <input
                  type='text'
                  name='Prenom'
                  id='prenom'
                  placeholder='Prenom'
                />
                <input
                  type={'number'}
                  name='Telefone'
                  id='telefone'
                  pattern='[0-9]{0,7}'
                  placeholder='Telephone'
                  maxLength='7'
                />
                <input
                  type='text'
                  name='Sujet'
                  id='sujet'
                  placeholder='Sujet'
                />
                <textarea
                  placeholder='Message'
                  name='message'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
                <button className='contact_button' disabled='disabled'>
                  Envoyer
                </button>
              </form>
              <div className='footer_section_left'>
                <div className='footer_info'>
                  <div className='a_propos'>
                    <h3>A propos du vinyl store</h3>
                    <p className='footer_text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In congue nunc rhoncus lorem dapibus, sagittis mattis
                      neque eleifend. Maecenas in tincidunt tellus. Quisque
                      venenatis viverra justo vestibulum posuere. Integer
                      molestie, eros congue pharetra viverra, nisi tellus
                      finibus sapien, vel luctus quam nunc quis mauris.
                    </p>
                    <p className='copyright'>©2021 Vinyl Store Lyon.</p>
                  </div>
                  <div className='plan_du_site'>
                    <h3>Plan du site</h3>
                    <nav>
                      <ul>
                        <li>
                          <a href='#accueil'>Accueil</a>
                        </li>
                        <li>
                          <a href='#un_mot_du_proprio'>Un mot du proprio</a>
                        </li>
                        <li>
                          <a href='#nos_services'>Nos Services</a>
                        </li>
                        <li>
                          <a href='#contact'>Contact & Accés</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact_right'>
          <div className='contact_right_container'>
            <div className='newsletter_container'>
              <h3>Newsletter</h3>
              <p className='footer_text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti quasi a animi ullam recusandae perferendis amet dolores
                nobis sed architecto vel quas pariatur enim iusto
              </p>
              <input
                type='text'
                name='Newsletter'
                id='newsletter'
                placeholder='example@example.com'
              />
              <button className='newsletter_button' disabled='disabled'>
                Souscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
