import React, { useEffect, useState } from 'react'
import {onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../../firebase/firebase';
import 'firebase/auth';
import './Referral.css'
import random from 'randomstring'
function Referral() {
  const [user, setUser]=useState({});
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(authentication,(currentUser)=>{
    setUser(currentUser)
    })
    return ()=>{
      unsubscribe();
    }
  },[]);
   const name = user.displayName;
   const photo = user.photoURL;
   const randomNum = random.generate(10);
  return (
    <div id="about" className="about">
        <div className="about-content">
        <div className="photo" data-aos="fade-up" data-aos-delay="900">
            <img src={photo}></img>
        </div>
        <div className="name">
          <p> {name} </p>
        </div>
        <div className='ReferralCode'>
          Your Referral Code is: <span>{randomNum}</span>
          <br/><br/>
          Your Current Referral Count is: <span>3</span>
        </div>

        </div>
        </div>
  );
}

export default Referral