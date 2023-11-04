import React from 'react'
import { ImageWrapper, ProfileImage } from './ProfileImageSectionStyles'
import profileImage from '../../images/profile_photo.jpg'

function ProfileImageSection() {
  return (
    <ImageWrapper>
      <ProfileImage src={profileImage} alt="ProfileImage" />
    </ImageWrapper>
  )
}

export default ProfileImageSection
