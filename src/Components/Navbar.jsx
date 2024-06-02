/*import React from 'react';
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
`;*/

import React from 'react';
import styled from "styled-components";
import image from "../assets/Capture.png"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <Nav>
      <div className='brand'>
        <img src={image} alt="OOGA" />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white ;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .brand {
    img {
      width: 200px;
      height: 100%;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .navi {
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem; 
      margin: 0;
      padding: 0;
      background-color: white;
      padding-right: 20px;
      border-radius: 15px 50px;

      li {
        position: relative;

        a {
          text-decoration: none;
          color: #004AAC;
          font-size: 1rem;
          font-weight: 500;
          font-family: Arial, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          transition: color 0.3s ease-in-out;

          &:hover {
            color: #ffce00;
          }

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: white;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease-in-out;
          }

          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }

        &:first-of-type a {
          color: #ffce00;
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    .navi ul {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;