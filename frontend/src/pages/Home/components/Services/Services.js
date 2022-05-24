import React from 'react'
import '../../../../css/services.css'
import Image1 from '../../../../assets/img/services_img_1.jpg'
import data from '../../../../data/data.json'

const Services = () => {
  return (
    <section id='services'>
      <div className='services_container'>
        <div className='content_container'>
          <img
            src={Image1}
            title='Vinyles exclusives'
            className='services_img_1'
            alt='Vinyles exclusives img'
          />
          <div className='services_txt_1'>
            <h2>{data.service.title}</h2>
            <p>{data.service.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
