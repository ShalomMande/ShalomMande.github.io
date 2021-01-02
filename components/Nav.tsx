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

      darkMode = false
      localStorage.setItem("dark", "false")
    } else {
      const darkenElements = document.getElementsByClassName("dark-toggle")
      const whiteElements = document.getElementsByClassName("white-toggle")
      const dark2 = document.getElementsByClassName("dark2-toggle")

      for (var i = 0; i < darkenElements.length; i++) {
        darkenElements[i].classList.toggle("black-bg")
      }
      for (var i = 0; i < whiteElements.length; i++) {
        whiteElements[i].classList.toggle("white")
      }
      for (var i = 0; i < dark2.length; i++) {
        dark2[i].classList.toggle("light-black-bg")
      }

      darkMode = true
      localStorage.setItem("dark", "true")
    }
  }

  function setColourMode() {
    const check = document.getElementById("theme-toggle") as HTMLInputElement
    check.defaultChecked = localStorage.getItem("dark") == "true"


    if (localStorage.getItem("dark") == "true") {
      const darkenElements = document.getElementsByClassName("dark-toggle")
      const whiteElements = document.getElementsByClassName("white-toggle")
      const dark2 = document.getElementsByClassName("dark2-toggle")

      for (var i = 0; i < darkenElements.length; i++) {
        darkenElements[i].classList.add("black-bg")
      }
      for (var i = 0; i < whiteElements.length; i++) {
        whiteElements[i].classList.add("white")
      }
      for (var i = 0; i < dark2.length; i++) {
        dark2[i].classList.add("light-black-bg")
      }

      darkMode = true
      localStorage.setItem("dark", "true")
    } else {
      const darkenElements = document.getElementsByClassName("dark-toggle")
      const whiteElements = document.getElementsByClassName("white-toggle")
      const dark2 = document.getElementsByClassName("dark2-toggle")

      for (var i = 0; i < darkenElements.length; i++) {
        darkenElements[i].classList.remove("black-bg")
      }
      for (var i = 0; i < whiteElements.length; i++) {
        whiteElements[i].classList.remove("white")
      }
      for (var i = 0; i < dark2.length; i++) {
        dark2[i].classList.remove("light-black-bg")
      }

      darkMode = false
      localStorage.setItem("dark", "false")
    }
  }

  useEffect(() => {
    setColourMode
  })

  return (
    <nav className="dark2-toggle main">
      <div className="logo">
        <a href="#" className="main" draggable="false" rel="noreferrer">
          <h4 style={{ fontWeight: 800 }} className="white-toggle">
            Shalom Mande
          </h4>
        </a>
      </div>
      <ul
        className={`nav-links dark2-toggle white-bg ${
          active ? "nav-active" : ""
        }`}
        id="nav-links"
      >
        {links.map((link, index) => (
          <li key={index}>
            <a
              className="white-toggle main"
              href={link.href}
              draggable="false"
              style={{ fontWeight: 500 }}
              rel="noreferrer"
            >
              {link.text}
            </a>
          </li>
        ))}
        <label className="switch">
          <input type="checkbox" id="theme-toggle" onInput={handleModeToggle} />
          <span className="slider round">
            <div style={{ marginTop: 2, color: "white" }}>
              <FontAwesomeIcon icon="moon" style={{ marginLeft: 5 }} />
              <FontAwesomeIcon icon="sun" style={{ marginLeft: 10 }} />
            </div>
          </span>
        </label>
      </ul>
      <div
        className={`burger ${active ? "toggle" : ""}`}
        id="burger"
        onClick={handleBurderClick}
 
      >
        <div className="line1 primary-bg"></div>
        <div className="line2 primary-bg"></div>
        <div className="line3 primary-bg"></div>
      </div>
    </nav>
  )
    


}

export default Navbar