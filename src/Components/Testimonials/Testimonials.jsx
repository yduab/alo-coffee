import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from'../../assets/next-icon.png'
import back_icon from'../../assets/back-icon.png'
import user_1 from'../../assets/54.jpeg'
import user_2 from'../../assets/50.jpeg'
import user_3 from'../../assets/55.jpeg'
import user_4 from'../../assets/53.jpeg'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    
  const slideForward =() =>{
       if(tx > -50){
        tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`; 
  }
  const slideBackward =() =>{
    if(tx < 0){
        tx += 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`; 
  }


  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_1} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>USA</span>
                        </div>
                    </div>
                    <p>"ALO Coffee delivers the richest and most flavorful Ethiopian Arabica coffee I've ever tasted! 
                        The quality is unmatched, and every cup feels like a journey to the highlands of Ethiopia. 
                        Truly exceptional!" </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_3} alt="" />
                        <div>
                        <h3> Li Wei</h3>
                        <span>China</span>
                        </div>
                    </div>
                    <p> "ALO Coffee is a game-changer! 
                        The aroma and smooth taste make it my top choice for premium Ethiopian coffee. 
                        Absolutely love it!" </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_2} alt="" />
                        <div>
                        <h3>Marco Bianchi</h3>
                        <span>Italy</span>
                        </div>
                    </div>
                    <p>"As a coffee lover, I appreciate the bold and rich flavors of ALO Coffee.
                        It reminds me of the deep traditions of espresso but with a unique Ethiopian twist!" </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_4} alt="" />
                        <div>
                        <h3>Hiroshi Tanaka</h3>
                        <span>Japan</span>
                        </div>
                    </div>
                    <p> "The quality of ALO Coffee is outstanding! 
                        Its delicate balance of acidity and sweetness creates a perfect brew every time. 
                        Highly recommended!" </p>
                </div>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Testimonials