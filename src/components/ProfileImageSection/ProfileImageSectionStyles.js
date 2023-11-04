import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: none !important;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 1rem;
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 200px;
    height: auto;
  }
`;
