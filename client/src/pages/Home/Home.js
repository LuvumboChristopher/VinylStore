import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ResponsiveMenu from './components/Navbar/ResponsiveMenu'
import Accueil from './components/Accueil/Accueil'
import Umdp from './components/Umdp/Umdp'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'


function Home() {
  return (
    <section>
      <Navbar />
      <ResponsiveMenu/>
      <Accueil />
      <Umdp />
      <Services />
      <Banner />
      <Contact />
    </section>
  )
}

export default Home
