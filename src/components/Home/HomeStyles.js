import styled, { keyframes } from "styled-components";
import backgroundImage from "../../images/background.jpeg";

const rainbowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const HomeWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 960px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    background-size: contain;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #f06, #09f, #6f0, #f06);
  background-size: 400% 400%;
  animation: ${rainbowAnimation} 10s linear infinite;
  text-stroke: 5px white; /* Adjust text stroke as needed */

  h4.introTitle {
    font-size: 80px;
    font-weight: bold;
    font-family: "Anton", sans-serif;
  }

  @media (max-width: 320px) {
    h4.introTitle {
      font-size: 30px !important;
    }
  }

  @media (max-width: 768px) {
    text-stroke: 3px white;

    h4.introTitle {
      font-size: 50px;
    }
  }

  @media (min-width: 1200px) {
    text-stroke: 7px white;

    h4.introTitle {
      font-size: 100px;
    }
  }
`;
