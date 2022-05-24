import React from 'react'
import '../../../../css/umdp.css'
import data from '../../../../data/data.json'

const Umdp = () => {
  return (
    <section id='umdp'>
      <div className='umdpContainer'>
        <div className='umdp_img'></div>
        <div className='umdp_text'>
          <article>
            <h1 className='un_mot_du_proprio'>{data.umdp.title}</h1>
            <div className='black_line'></div>
            <p>{data.umdp.text1}</p>
            <p>{data.umdp.text2}</p>
            <p id='signature'>{data.umdp.signature}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Umdp
