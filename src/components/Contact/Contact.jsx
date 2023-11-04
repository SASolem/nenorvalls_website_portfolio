import React from 'react'
import {
  ContactWrapper,
  SectionTitle,
  ContactForm,
  StyledTextField,
  StyledButton,
  Container
} from './ContactStyles'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <ContactWrapper id="contact">
      <SectionTitle>Contact</SectionTitle>
      <Container>
        <ContactForm onSubmit={handleSubmit}>
          <StyledTextField placeholder="Name" required />
          <StyledTextField placeholder="Email" type="email" required />
          <StyledTextField as="textarea" placeholder="Message" rows={4} required />
          <StyledButton type="submit">Send Message</StyledButton>
        </ContactForm>
        <p>
          You can also reach out to me via email {' '}
          <a href="mailto: nenorvalls@nenorvalls.no">here</a>.
        </p>
        <p>
          Connect with me on{' '}
          <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
            Gmail
          </a>{' '}
          and{' '}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </Container>
    </ContactWrapper>
  )
}

export default Contact
