import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    order: 1;
  }
`;

export const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
