import styled from "styled-components";

export const ContactWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #000;
  padding: 20px;
`;

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  max-width: 960px;

  @media (max-width: 320px) {
    width: 100%;
    padding: 10px;
  }
`

export const SectionTitle = styled.h5`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTextField = styled.input`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e4405f;
  }
`;
