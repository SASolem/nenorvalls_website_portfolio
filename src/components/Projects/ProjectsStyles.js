import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  min-height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 

  @media (max-width: 768px) {
    padding-top: 5rem;
  }
`;

export const ContentWrapper = styled.div`
background-color: #000;
display: flex;
align-items: center;
justify-content: center;
`;

export const SectionTitle = styled.h5`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  @media (min-width: 769px) {
    & > div {
      flex: 1 0 calc(33.333% - 2rem);
    }
  }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      & > div {
        flex-basis: 100%;
      }
    }
`;

export const ProjectCard = styled.div`
  background-color: black;
  border: 2px solid #fff;
  margin: 1rem;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0.5rem;
  }
`;

export const ProjectTitle = styled.h6`
  font-size: 18px;
  margin: 10px 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`; 

export const ProjectCardContent = styled.div`
  text-align: center;
  color: #e4405f;
  margin: 1rem;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ProjectActions = styled.div`
  text-align: center;
`;

export const ProjectImage = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

export const CustomButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #fff;
  padding: 10px 20px;
  margin: 10px 5px;
  text-decoration: none;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
