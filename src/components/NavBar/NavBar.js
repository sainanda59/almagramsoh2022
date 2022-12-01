import React from 'react'
import './NavBar.css';
import { authentication } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

export default function NavBar() {
    const [user, setUser]=useState({});

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider);
    }
    
   const signout = () => {
    signOut(authentication).then(() => {

      console.log("signed out");
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
   }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(authentication,(currentUser)=>{
    setUser(currentUser)
    })
    return ()=>{
      unsubscribe();
    }
    },[])

    if(user){
        return (
            <div className="NavBar" id="NavBar">
        <div className="NavBar-body">
            <div className="logo" data-aos="zoom-in" data-aos-delay="500">
                <p>ALMAGRAM</p>                
            </div>
            <div className="nav-items" id="nav-items">
                <a href="#home" className="nav-link active" data-aos="fade-right" data-aos-delay="500">HOME</a>
                <a href="#impact" className="nav-link" data-aos="fade-right" data-aos-delay="600">CHAT</a>
                <a href="#motive" className="nav-link" data-aos="fade-down" data-aos-delay="700">REFERAL</a>
                <a href="#solution" className="nav-link" data-aos="fade-down" data-aos-delay="800">COLLAB</a>
                <button data-aos="fade-left" data-aos-delay="900"><a href="#pledge" className="nav-link" >PROFILE</a></button>
                <button onClick={signout} data-aos="fade-left" data-aos-delay="1000"><a href="" className="nav-link" >LOGOUT</a></button>
            </div>
        </div>
    </div>
    )
    }
    else{
        return (
            <div className="NavBar" id="NavBar">
        <div className="NavBar-body">
            <div className="logo" data-aos="zoom-in" data-aos-delay="500">
                <p>ALMAGRAM</p>                
            </div>
            <div className="nav-items" id="nav-items">
                <button onClick={signInWithGoogle} data-aos="fade-left" data-aos-delay="1000"><a href="" className="nav-link" >SIGN-IN</a></button>
            </div>
        </div>
    </div>
    )
    }
}