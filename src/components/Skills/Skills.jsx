import React from 'react'
import IntroductionSection from '../IntroductionSection/IntroductionSection';
import {
  SkillsWrapper,
  SkillBadge,
  SkillIcon,
  SkillName,
  SectionTitle,
} from './SkillsStyles'

function Skills() {
  return (
    <>
      <IntroductionSection />
      <SectionTitle>Skills</SectionTitle>
      <SkillsWrapper>
        {/* HTML */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/HTML-E4405F?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML"
          />
          <SkillName>HTML</SkillName>
        </SkillBadge>

        {/* CSS */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/CSS-E4405F?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS"
          />
          <SkillName>CSS</SkillName>
        </SkillBadge>

        {/* JavaScript */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/JavaScript-E4405F?style=for-the-badge&logo=javascript&logoColor=white"
            alt="JavaScript"
          />
          <SkillName>JavaScript</SkillName>
        </SkillBadge>

        {/* Adobe XD */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/Adobe%20XD-E4405F?style=for-the-badge&logo=adobe-xd&logoColor=white"
            alt="Adobe XD"
          />
          <SkillName>Adobe XD</SkillName>
        </SkillBadge>

        {/* GitHub */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/GitHub-E4405F?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
          />
          <SkillName>GitHub</SkillName>
        </SkillBadge>

        {/* WordPress */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/WordPress-E4405F?style=for-the-badge&logo=wordpress&logoColor=white"
            alt="WordPress"
          />
          <SkillName>WordPress</SkillName>
        </SkillBadge>

        {/* React */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/React-E4405F?style=for-the-badge&logo=react&logoColor=white"
            alt="React"
          />
          <SkillName>React</SkillName>
        </SkillBadge>

        {/* React Bootstrap */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/React%20Bootstrap-E4405F?style=for-the-badge&logo=bootstrap&logoColor=white"
            alt="React Bootstrap"
          />
          <SkillName>React Bootstrap</SkillName>
        </SkillBadge>

        {/* Sass */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/Sass-E4405F?style=for-the-badge&logo=sass&logoColor=white"
            alt="Sass"
          />
          <SkillName>Sass</SkillName>
        </SkillBadge>

        {/* Node.js */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/Node.js-E4405F?style=for-the-badge&logo=node.js&logoColor=white"
            alt="Node.js"
          />
          <SkillName>Node.js</SkillName>
        </SkillBadge>

        {/* Netlify */}
        <SkillBadge>
          <SkillIcon
            src="https://img.shields.io/badge/Netlify-E4405F?style=for-the-badge&logo=netlify&logoColor=white"
            alt="Netlify"
          />
          <SkillName>Netlify</SkillName>
        </SkillBadge>
      </SkillsWrapper>
    </>
  )
}

export default Skills
