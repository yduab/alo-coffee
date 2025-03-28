import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Export from './Components/Export/Export'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle='Our Exporting Products' title='Quality Coffee, Globally Delivered'/>
      <Export />
      <About />
      <Title subTitle='Gallery' title='ALO Photos'/>
      <Gallery />
      <Title subTitle='Testimonials' title='What Our Clients Says'/>
      <Testimonials />
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact />
      <Footer />
      </div>
      
       
    </div>
  )
}

export default App