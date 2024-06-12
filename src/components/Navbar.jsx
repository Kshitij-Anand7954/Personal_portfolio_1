import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
          {/* <img className="mx-2 w-10" src={logo}/> */}
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/kshitij-anand-b23761230/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <a href="https://github.com/Kshitij-Anand7954" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare/>
          </a>
          <a href="https://www.instagram.com/kshitij_singh__21" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
      </div>
    </nav>
  )
}

export default Navbar;
