import React from 'react'
import './NavBar.css';
import { authentication } from '../../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
                <Link to='/' className="nav-link active">HOME</Link>
                <Link to='/chat' className="nav-link">CHAT</Link>
                <Link to='/referral' className="nav-link">REFERRAL</Link>
                {/* <Link to='/collab' className="nav-link">COLLAB</Link> */}
                <Link to='/profile' className='nav-link nav-btns'><button data-aos="fade-left" data-aos-delay="900">PROFILE</button></Link>
                <button onClick={signout} data-aos="fade-left" data-aos-delay="1000" className='nav-link nav-btns'>LOGOUT</button>
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

