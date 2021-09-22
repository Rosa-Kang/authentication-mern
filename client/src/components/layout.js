import * as React from "react"
import {useState} from 'react'
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from './Footer'
import Dropdown from "./Dropdown"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle}/>
         <main>{children}</main>
        <Footer />
    </>
  )
}


export default Layout
