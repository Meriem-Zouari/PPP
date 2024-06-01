import React from 'react'
import pichero from "../assets/pichero.png"
import styled from  "styled-components";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={pichero} alt="" />
      </div>
      <div className= 'contentHero'>
        <div classname="title">
         <h1>TRAVEL TO EXPLORE</h1>

         <p>
         Discover stunning destinations with SkyTraveler. Whether you're looking for a relaxing beach vacation or an adventurous getaway, we've got you covered. Book your journey with us and explore the world like never before.
         </p>

        </div>

      <div className="search">
        <div className="containerHero">
          <label htmlFor="">Where you want to go</label>
          <input type="text" placeholder="search your location"/>
        </div>
        <div className="containerHero">
          <label htmlFor="">Depart on</label>
          <input type="date" />
        </div>
        <div className="containerHero">
          <label htmlFor="">Return on</label>
          <input type="date" />
        </div>
        <button  >Explore now </button>
      </div>
    </div>  
  </Section>
  );
}
const Section = styled.section`
position: relative;
margin-top: 2rem;
width: 100%;
height: 100%;
.background{
  img{
    width: 100%;
    filter: brightness(60%);
  }
}
p{
  width:80%;  
  text-align: center;
  padding-left: 350px;
}
.contentHero{
  height:100%;
  width:100%;
  position: absolute;
  top:200px;
  z-index :3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: white; 
  .title{ 
    h1{
      font-size: 3rem;
      letter-spacing: 3rem;
      }
    p{
      text-align: center;
      padding:0 30vw;
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
}
.search{
  background-color: #ffffffce;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  .containerHero{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 1.5rem;
    label{
      font-size: 1.1rem;
      color: #03045e;
    }
    input {
      background-color:  transparent;
      border: none;
      text-align: center;
      color: black;
      &[type="date]{
        padding-left: 3rem;
      }
      &::placeholder {
        color"overscroll-behavior-block;
        color: black;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .button{
    padding: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    border: none;
    color: #4D869C;
    background-color: #4361ee;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition 0.3s ease-in-out;
    &: {
      background-color:#023e8a;
    }
     
  }
}
`;