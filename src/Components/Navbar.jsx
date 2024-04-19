import React from 'react';
import styled from  "styled-components";
import resources from "../resources/resources.png"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src={resources }alt="OOGA" />
        </div>
        </div>
        <ul>
        <li>        
          <Link to="/">home</Link>
        </li>
        <li><Link to="/Connect">Connect</Link></li>
        <li><link to=""></link></li>
        </ul>
        <ul>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
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
justify-content: space-between;
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
    color:#0077b6;
    font-size: 1.2 rem;
    transition: 0ms.1s ease-in-out;
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
