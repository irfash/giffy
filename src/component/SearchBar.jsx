import React, { useState ,useEffect} from 'react'
import { GifSearch } from '../features/gifSearch/GifSearch';
import "../scss/SearchBar.scss"
import "../scss/SearchBarTop.scss"
export default function SearchBar() {
  
  const [show,setShow]=    useState(false);
  const controleNavbar=()=>{
    setShow(window.scrollY>50?true:false);
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',controleNavbar)
    return ()=>{
      window.removeEventListener('scroll',controleNavbar)
    }
  },[])
  
  const style = {
     position:"fixed",
        top: 0,
        right: 0,
        left: 0
  }  
  
  
  return (
    <div className={`TopBarComponent TopSearchBar navbar ${show &&'fixed-top'}`}
    style={show?style:{}}
    >
        <GifSearch show={show}/>

    </div>
  )
}
