import React from 'react'
import './About.css'
import about_img from'../../assets/5.jpg'
const About = () => {
  return (
   <div className="about">
    <div className="aboutleft">
    <img src={about_img} alt="" className='about-img' />
    </div>
     <div className="aboutright">
        <h3>About ALO</h3>
        <h2>Discover the Excellence of Ethiopian Coffee</h2>
        <p>
         At Alo Coffee, we are passionate about bringing you the finest Ethiopian Arabica coffee, sourced from the highlands of Ethiopia, where the altitude exceeds 2,450 meters. 
          </p>

          <p>
        The unique environment, combined with traditional farming techniques, results in coffee beans with distinct flavors and aromas that reflect the rich heritage of the region. 
          </p>

           <p>
           Our commitment to quality ensures that every cup of our coffee delivers a smooth, full-bodied taste with bright acidity, perfect for coffee lovers worldwide.
         </p>

         <p>
           We are also proud to be the winner of the **Cup of Excellence 2021**, an esteemed recognition that celebrates the exceptional quality of our coffee. This achievement reflects our dedication to producing the best coffee and our continued pursuit of excellence.
           </p>

     </div>
   </div>
  )
}

export default About