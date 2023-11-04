import React, { useState, useEffect } from 'react'
import {
  CustomHeaderWrapper,
  CustomHeaderTitle,
  StyledIconButton,
  BigScreenNavLinks,
  NavLink,
  CustomNavbar,
  SmallScreenNavLinks,
} from './HeaderStyles'

function Header() {
  const [selectedSection, setSelectedSection] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavItemClick = (sectionId) => {
    setSelectedSection(sectionId)
    if (window.innerWidth <= 900) {
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    if (selectedSection) {
      scrollToSection(selectedSection)
      setSelectedSection(null)
    }
  }, [selectedSection])

  return (
    <CustomHeaderWrapper>
      <CustomNavbar>
        <CustomHeaderTitle onClick={() => handleNavItemClick('about')}>
          NeNorvalls
        </CustomHeaderTitle>
        <StyledIconButton color="inherit" aria-label="menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </StyledIconButton>
        <BigScreenNavLinks>
          <NavLink onClick={() => handleNavItemClick('projects')}>
            Projects
          </NavLink>
          <NavLink onClick={() => handleNavItemClick('about')}>About</NavLink>
          <NavLink onClick={() => handleNavItemClick('contact')}>
            Contact
          </NavLink>
        </BigScreenNavLinks>
      </CustomNavbar>
      {isMobileMenuOpen && (
        <SmallScreenNavLinks>
          <NavLink onClick={() => handleNavItemClick('projects')}>
            Projects
          </NavLink>
          <NavLink onClick={() => handleNavItemClick('about')}>About</NavLink>
          <NavLink onClick={() => handleNavItemClick('contact')}>
            Contact
          </NavLink>
        </SmallScreenNavLinks>
      )}
    </CustomHeaderWrapper>
  )
}
export default Header
