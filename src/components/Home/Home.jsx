import React from 'react';
import ProfileImageSection from '../ProfileImageSection/ProfileImageSection';
import { Container, Row, Col } from 'react-bootstrap';
import { HomeWrapper, TitleWrapper, FlexWrapper } from './HomeStyles';

function Home() {
  return (
    <HomeWrapper>
      <ProfileImageSection />
      <FlexWrapper>
        <Container>
          <Row>
            <Col>
            <TitleWrapper>
              <h4 className='introTitle'>Welcome to my Portfolio!</h4>
            </TitleWrapper>
            </Col>
          </Row>
        </Container>
      </FlexWrapper>
    </HomeWrapper>
  );
}

export default Home;
