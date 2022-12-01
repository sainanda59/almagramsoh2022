// import React from 'react'
// import './Landing.css'
// export default function Landing() {
//   return (
//     <div className='Landing'>
//     </div>
//   )
// }

import landing from './landing3.png';

import React from 'react'
import './Landing.css'
function Home() {
    return (
   
        <div id="home">
             <div className="banner">
        <div className="bottom-gradient">
            <img src={require('./landing.png').default} alt="" />
        </div>

        <div className="act-now">
            <p data-aos="zoom-in" data-aos-delay="1000">BACK TO WHERE</p>
        </div>

        <div className="banner-main">
            {/* <div className="banner-light">
                <h1>THE BLUE PLANET</h1>
            </div>  */}
            <div className="banner-body">  
                         
                <div className="banner-left">    
                    <h1 data-aos="zoom-in" data-aos-delay="1100">IT ALL BEGAN</h1>
                    <h2 data-aos="zoom-in" data-aos-delay="1200">Carry your roots wherever you are</h2>
                    <p data-aos="zoom-in" data-aos-delay="1300">Crafted for Alumni-Relations and fundraising teams to boost engagement with streamlined programs. Know your community better with data, elevate their experience from connection to donation, and foster a sense of community with an all-in-one engagement & fundraising platform.</p>

                    {/* <div className="bannner-button" data-aos="zoom-in" data-aos-delay="1500">
                        <a href="#home">
                            <button>Save the Planet</button>
                        </a>
                        <a href="#home">
                            <button>Sponsor Us</button>
                        </a>

                    </div>               */}

                    

                    
                </div>
    
                <div className="banner-right" data-aos="zoom-out" data-aos-delay="1000">
                    <img src={landing} alt="" className="bounce-2" />
                </div>

                
            </div>
        </div>   
        
        
    </div>


        </div>
    )
}

export default Home
