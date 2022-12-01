import {onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../../firebase/firebase';
import React, { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom';
import Landing from "../Landing/Landing";
export default function Protected({children}) {
  const [user, setUser]=useState({});
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(authentication,(currentUser)=>{
    setUser(currentUser)
    })
    return ()=>{
      unsubscribe();
    }
  },[]);
  if(!user){
    return(<Landing/>)
  }else{
    return children;
  }
}