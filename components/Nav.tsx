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

  function handleModeToggle() {
    if (darkMode) {
      const darkenElements =  document.getElementsByClassName("dark-toggle")
      const whitenElements = document.getElementsByClassName("white-toggle")
      const dark2 = document.getElementsByClassName("dark2-toggle")

      for (var i = 0; i < darkenElements.length; i++) {
        darkenElements[i].classList.toggle("black-bg")
      }
      for (var i = 0; i < whitenElements.length; i++) {
        whitenElements[i].classList.toggle("white")
      }
      for (var i = 0; i < dark2.length; i++) {
        dark2[i].classList.toggle("light-black-bg")
      }

    }
  }






}

export default Navbar