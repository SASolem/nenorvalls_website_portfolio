import React from 'react'
import { AboutMeWrapper, SectionTitle, Paragraph } from './AboutMeStyles'
import { ContentWrapper } from './AboutMeStyles'

function AboutMe() {
  return (
    <AboutMeWrapper id="about">
      <SectionTitle>About Me</SectionTitle>
      <ContentWrapper>
        <Paragraph className='aboutParagraph'>
          Hi, I'm Nenita Norvalls, a passionate coder based in Bergen, Norway.
        </Paragraph>
        <Paragraph className='aboutParagraph'>
          I will soon be finishing my course in Front End Development at Noroff.
          My educational background has equipped me with a solid foundation in
          HTML, JavaScript, CSS, and React.
        </Paragraph>
        <SectionTitle>Interests</SectionTitle>
        <Paragraph className='aboutParagraph'>
          I'm constantly exploring new technologies and seeking opportunities to
          expand my knowledge in the world of coding. Outside of work, I enjoy
          playing Nintendo, reading books, live-streaming, spending time with my
          family, and studying online coding languages that some companies
          require. I love designing in Adobe XD and photography.
        </Paragraph>
      </ContentWrapper>
    </AboutMeWrapper>
  )
}

export default AboutMe
