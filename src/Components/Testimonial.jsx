import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/SecondCustomer.avif";
import avatarImageimtiez from "../assets/ThirdCustomer.avif";
import avatarImageEmna from "../assets/Firstcustomer.jpg";

export default function Testimonial() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          "I recently booked a flight through SkyTraveler Booking and the experience was fantastic! The website is user-friendly, and I found the best deals quickly. The customer support team was extremely helpful and resolved my queries within minutes.Highly recommend this service for a hassle-free booking experience!"
          </p>
          <div className="info">
            <img src={avatarImageEmna} alt="" />
            <div className="details">
              <h4>Anna M.</h4>
              
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          "Booking my flight with SkyTraveler was a breeze! The whole process was smooth, and I appreciated the clear and concise information provided at each step. The prices were competitive, and I even received notifications about flight status updates, which kept me informed throughout my journey. Definitely my go-to flight booking service from now on!"
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>John D.</h4>

            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          "I am so impressed with the efficiency and reliability of SkyTraveler Booking! I was able to find the perfect flight within minutes, thanks to their easy-to-navigate site and great filtering options. I will certainly be using their service for all my future travel plans!"
          </p>
          <div className="info">
            <img src={avatarImageimtiez} alt="" />
            <div className="details">
              <h4>Emily S.</h4>
              
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
