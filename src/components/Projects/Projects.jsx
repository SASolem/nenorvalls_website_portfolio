import React from 'react'
import {
  ProjectsWrapper,
  SectionTitle,
  ProjectContainer,
  ProjectCard,
  ProjectTitle,
  ProjectCardContent,
  ProjectActions,
  ProjectImage,
  CustomButton,
  ContentWrapper
} from './ProjectsStyles' // Import styles from the separate file

import nenoSp2AuctionsImage from '../../images/neno-sp2auctions.png'
import reactEcomShoppingStoreImage from '../../images/react-ecom-shopping-store.png'
import bitsAndBotsImage from '../../images/bits_and_bots.png'

function Projects() {
  const projects = [
    {
      imageSrc: nenoSp2AuctionsImage,
      title: 'neno_SP2_auctions',
      description:
        'This project is designed with knowledge and mastery in HTML, Bootstrap, Sass & Javascript.',
      technologies: 'Html/CSS, Javascript',
      githubLink: 'https://github.com/NeNorvalls/neno_SP2_auctions.git',
      liveDemoLink: 'https://neno-sp2auctions.netlify.app/',
    },
    {
      imageSrc: reactEcomShoppingStoreImage,
      title: 'react_jsframework_ecom_shop',
      description:
        'This project involves building a web application using React and designing it with Styled-components.',
      technologies: 'HTML/CSS, JavaScript, React ',
      githubLink:
        'https://github.com/NeNorvalls/react_jsframework_ecom_shop.git',
      liveDemoLink: 'https://react-ecom-shopping-store.netlify.app/',
    },
    {
      imageSrc: bitsAndBotsImage,
      title: 'bits_and_bots_final_exam2',
      description:
        'This project is created with React, Sass, Bootstrap, headless WordPress CMS, and UI design.',
      technologies: 'React, Sass, Headless CMS',
      githubLink: 'https://github.com/NeNorvalls/bits_and_bots_final_exam2.git',
      liveDemoLink: 'https://bits-and-bots.netlify.app/',
    },
  ]

  return (
    <ProjectsWrapper id="projects">
    <SectionTitle>Projects</SectionTitle>
    <ContentWrapper>
    <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectCardContent>
              <ProjectImage src={project.imageSrc} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <p>{project.technologies}</p>
              <p>{project.description}</p>
            </ProjectCardContent>
            <ProjectActions>
              <CustomButton
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </CustomButton>
              <CustomButton
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </CustomButton>
            </ProjectActions>
          </ProjectCard>
        ))}
      </ProjectContainer>
      </ContentWrapper> 
    </ProjectsWrapper>
  )
}

export default Projects
