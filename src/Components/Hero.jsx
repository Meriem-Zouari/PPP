/*import React from 'react'
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
`;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pichero from "../assets/pichero.png";
import styled from "styled-components";

export default function Hero() {
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/Booking', { 
      state: { 
        destination, 
        departDate, 
        returnDate 
      } 
    });
  };

  return (
    <Section id="hero">
      <div className="background">
        <img src={pichero} alt="" />
      </div>
      <div className='contentHero'>
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Discover stunning destinations with SkyTraveler. Whether you're looking for a relaxing beach vacation or an adventurous getaway, we've got you covered. Book your journey with us and explore the world like never before.
          </p>
        </div>
        <div className="search">
          <div className="containerHero">
            <input 
              type="text" 
              placeholder="Where you want to go" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="containerHero">
            <input 
              type="date" 
              placeholder="Depart on mm/dd/yyyy" 
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />
          </div>
          <div className="containerHero">
            <input 
              type="date" 
              placeholder="Return on mm/dd/yyyy" 
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
          <button onClick={handleExplore}>EXPLORE NOW</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .background {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(70%);
    }
  }

  .contentHero {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 0 20%;
    box-sizing: border-box;

    .title {
      text-align: center;
      

      h1 {
        font-size: 5rem;
        letter-spacing: 2rem;
        font-weight: 300;
        
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
      }
    }

    .search {
      width: 100%;
      max-width: 1200px;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 15px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 50px;
      padding: 15px;

      .containerHero {
        input {
          width: 100%;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 25px;
          padding: 0 20px;
          font-size: 1rem;
          color: #333;
          outline: none;

          &::placeholder {
            color: #777;
          }

          &[type="date"] {
            padding: 0 10px;
            text-align: center;
          }
        }
      }

      button {
        height: 60px;
        border: none;
        border-radius: 25px;
        background: linear-gradient(135deg, #4ecdc4 0%, #45b7d9 50%, #0077be 100%);
        color: white;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;

        &:hover {
          background: linear-gradient(135deg, #40b5ac 0%, #3d9fbf 50%, #0066a6 100%);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .contentHero {
      padding: 0 10%;
    }
  }

  @media (max-width: 800px) {
    .contentHero {
      .title h1 {
        font-size: 3rem;
        letter-spacing: 1rem;
      }
      .search {
        grid-template-columns: 1fr;
        border-radius: 25px;
      }
    }
  }
`;
