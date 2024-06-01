import React from 'react';
import styled from  "styled-components";
import image from "../assets/image.png"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
      <Nav>
        <div className='brand'>
            <img src={image }alt="OOGA" />
        </div>
        <div className='navi'>
        <ul>
        <li>        
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/Connect">Connect</Link></li>
          <li>
            <Link to="/Destinations">Destinations</Link>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
          <Link to="/user/accountsettings">Profile</Link>
        </li>
        </ul>
        </div>
      </Nav>


    );
}
const Nav = styled.nav`
padding-top:20px;
.navi{
  display: fit-content;
  background-color: #F5F2E9;
  padding-right: 20px;
  border-radius: 15px 50px;
}
background-color: #0d8d9e;
display: flex;
img {
  padding-left: 50px;
  width: 80%
}
ul {
  padding-top: 14px;

}
align-items: center;
ul
{
display:flex;
list-style-type: none;
gap: 1rem; 
brand{
  background-color:black;
  padding: 500px;
}
li
{
  a{
    text-decoration: none;
    color:#023e8a;
    font-size: 1.2 rem;
    transition: 0ms.1s ease-in-out;
    font-weight: 900 ;
    &:hover{
      color:#023e8a;
    }
  }
  &:first-of-type{
    a{
      color: #023e8a;
      font-weight: 900 ;
    }
  }
}
}
button
{
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
  color:while;
  background-color: #48cae4;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color:#023e8a;
  } 
}
`;