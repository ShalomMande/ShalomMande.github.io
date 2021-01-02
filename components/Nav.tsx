import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const links = [
  {
    href: "#home",
    text: "Home"
  },
  {
    href: "#contact",
    text: "Contact"
  },
  {
    href: "#projects",
    text: "Projects"
  },
]

const Navbar = () => {
  const [active, setActive] = useState(false)

  let darkMode

  function handleBurderClick(){
    setActive(prevState => !prevState)
  }

  setMode()

  function setMode() {
    if (typeof window !== `undefined`) {
      if (localStorage.getItem("dark") == "true") {
        darkMode = true
      } else{
        darkMode = false
      }
    }
  }






}

export default Navbar