import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Accueil from './components/Accueil/Accueil'
import Contact from './components/Contact/Contact'
import Umdp from './components/Umdp/Umdp'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'

function Home() {
  return (
    <>
      <Navbar />
      <Accueil />
      <Umdp />
      <Services />
      <Banner/>
      <Contact />
    </>
  )
}

export default Home
