/*import React from 'react'
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import styled from "styled-components";

const Product = (props) => {
  const { id, title, subTitle, cost, image ,duration} = props.data;

  return (
    <Section id="recommend">

      <div className="destinations">
        
        <div className="destination">
          <img src={image} alt="" />
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <div className="info">
            <div className="services">
              <img src={info1} alt="" />
              <img src={info2} alt="" />
              <img src={info3} alt="" />
            </div>
            <h4>{cost}</h4>
          </div>
          <div className="distance">
            <span>1000 Kms</span>
            <span>{duration}</span>
          </div>
        </div>
       
      </div>
    </Section>
  );
}
export default Product;

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 0 ;
    .destination {
      grid-gap: 50px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      width:400px;
      height:400px;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
        
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Product = (props) => {
  const { id , title, subTitle, cost, image, duration } = props.data;
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/Booking', { 
      state: { 
        destinationId: id,
        title,
        subTitle,
        cost,
        duration
      } 
    });
  };
  return (
    <StyledProduct>
      <div className="image-container">
        <img src={image} alt={title} />
        <div className="price">${cost}</div>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <div className="details">
          
          <span>{duration}</span>
        </div>
        <button onClick={handleBookNow}>Book Now</button>
      </div>
    </StyledProduct>
  );
};

export default Product;

const StyledProduct = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    position: relative;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .price {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #4361ee;
      color: white;
      padding: 10px 15px;
      border-radius: 25px;
      font-weight: bold;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
  }

  .info {
    padding: 20px;
    h3 {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 10px;
    }
    p {
      color: #666;
      margin-bottom: 15px;
    }
    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .services {
        display: flex;
        gap: 10px;
        img {
          width: 30px;
          padding: 5px;
          background-color: #f0f0f0;
          border-radius: 50%;
          transition: all 0.3s ease;
          &:hover {
            background-color: #4361ee;
            transform: scale(1.1);
          }
        }
      }
      span {
        font-weight: bold;
        color: #4361ee;
      }
    }
    button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #4ecdc4 0%, #45b7d9 50%, #0077be 100%);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        background: linear-gradient(135deg, #40b5ac 0%, #3d9fbf 50%, #0066a6 100%);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
