import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/youssefrouissi.jpg";
import avatarImageimtiez from "../assets/imtiezmrad.png";
import avatarImageEmna from "../assets/avatarimageEmna.jpg";

export default function Testimonial() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            je suis Emna de jandouba ,Algerie. bisous bisous.
          </p>
          <div className="info">
            <img src={avatarImageEmna} alt="" />
            <div className="details">
              <h4>Emna Miraoui</h4>
              <span>Mar2a Moutal9a min jandouba/djerba/tataouine/mednine/beja/24 wilaya </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            ena youssef Rouissi min saltanet 3oman win7ib tounes barcha barcha. kouskous kouskous brika zlebia 
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Rouissi Youssef</h4>
              <span>INGENIEUR A RADES basé BARON centre ville </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            benzart endroit magnifique surtout manzel abd el ra7man. TCHON kaYAS.
          </p>
          <div className="info">
            <img src={avatarImageimtiez} alt="" />
            <div className="details">
              <h4>Imtiez Mrad</h4>
              <span>Bodybuilder basé à Menzal abd el ra7man</span>
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
