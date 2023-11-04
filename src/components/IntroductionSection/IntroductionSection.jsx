import React from 'react'
import {
  IntroductionWrapper,
  ButtonWrapper,
  CustomButton,
} from './IntroductionSectionStyles'

function IntroductionSection() {
  const scrollToProjects = () => {
    window.location.href = '#projects'
  }

  return (
    <IntroductionWrapper>
      <p>
        As I progress through Noroff School of Technology and Digital Media's
        Front-End Development course, my commitment to creativity in web
        development continues to grow stronger. I believe that creativity is the
        driving force behind innovation in this field. This course has provided
        me with valuable skills in designing user-friendly interfaces and
        solving complex coding challenges. I'm passionate about seamlessly
        merging design aesthetics with technical functionality. While I'm still
        in the process of completing this program, I'm eager to bring my
        creative approach to web development to a company that values innovation
        and excellence.
      </p>
      <ButtonWrapper>
        <CustomButton onClick={scrollToProjects}>View My Projects</CustomButton>
      </ButtonWrapper>
    </IntroductionWrapper>
  )
}

export default IntroductionSection
