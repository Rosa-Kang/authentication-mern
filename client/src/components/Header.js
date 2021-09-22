import { Link } from "gatsby"
import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import { HiMenuAlt3 } from "react-icons/hi";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const Header = ({toggle}) => {
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    if (window.location.pathname) {
      setNavbar(window.location.pathname);
    }
    console.log(window.location.pathname)
  }, [])

  return (
    <Nav navbar={ navbar}>
      <NavLink to='/'>EXPLORIX</NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        {menuData.map((data, index) => (
            <NavLink to={data.link} key={index}>
            {data.title}</NavLink>
        ))}
      </NavMenu>
      <NavBtn>
              <Button primary="true" round="true" to="/signin" css={`margin-right: 4px`}>Sign in</Button>              
              <Button primary="true" round="true" to="/contact">Contact Us</Button>
      </NavBtn>
    </Nav>
    )
}

export default Header

const Nav = styled.nav`
    background: ${({navbar}) => (navbar !== "/" ? "#141414" :  "transparent" )};
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1300px) / 2);
    z-index: 100;
    position: relative;
`
const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
      color: #F26A2E;
    }

`

const Bars = styled(HiMenuAlt3)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
    display: block;
    position:absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    height:40px;
    width:40px;
    cursor: pointer;
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

    @media screen and (max-width: 768px) {
      display: none;
    }
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`