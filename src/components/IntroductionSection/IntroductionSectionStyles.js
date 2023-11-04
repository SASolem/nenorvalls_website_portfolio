import styled from "styled-components";

export const IntroductionWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 1rem auto; 
  padding: 1rem;
  border-radius: 10px;
  color: #000;
  background-color: #fff;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    padding: 2rem;
    margin: 1rem auto; /
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const CustomButton = styled.button`
  box-shadow: none;
  background-color: #e4405f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #000 !important;
  }
`;
