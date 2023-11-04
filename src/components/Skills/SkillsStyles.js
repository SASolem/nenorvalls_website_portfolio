import styled, { keyframes } from "styled-components";

const glossyAnimation = keyframes`
  0% {
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%);
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
  }
  50% {
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%);
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.5);
  }
  100% {
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%);
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 960px;
  margin: auto;
`;

export const SkillBadge = styled.div`
  align-items: center;
  background: black;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  border-radius: 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 1rem;
  width: 120px;
  height: 120px;
  font-size: 1.2rem;
  animation: ${glossyAnimation} 3s infinite;

  @media (max-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const SkillName = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem;
`;
