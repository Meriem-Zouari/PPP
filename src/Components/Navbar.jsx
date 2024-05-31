import React from 'react';
import styled from  "styled-components";
import image from "../assets/image.png"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src={image }alt="OOGA" />
        </div>
        </div>
        <ul>
        <li>        
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/Connect">Connect</Link></li>
          <li>
            <a href="#recommend">Destinations</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </Nav>


    );
}
const Nav = styled.nav`

display: flex;

align-items: center;
brand{
  .container {
    cursor: pointer ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    gap: 0.4 rem ;
    font-size: 1.2 rem ;
    font-weight: 900 ;
    width:50px;
    height:50px;
  }
  .toggle
  {
  .display: none;
  }
}
ul
{
display:flex;
list-style-type: none;
gap: 1rem; 

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