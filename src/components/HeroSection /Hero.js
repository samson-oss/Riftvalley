import React from 'react';
import styled from 'styled-components';
import image1 from '../../imgs/hero.png'

const HeroSection = styled.div`
    background-image:url(${image1}) ;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding:  9%;
  height:120vh;
    color: white;
    @media (max-width: 768px) {
 }
`;

const Content = styled.div`
  max-width: 800px; 
`;

const Heading1 = styled.h1`
font-size: 96px;
  margin-top: 250px; 
  @media (max-width: 768px) {
    font-size:50px;
  }
`;

const Heading2 = styled.h2`
  font-size: 96px; 
  margin-bottom: 20px; 
  @media (max-width: 768px) {
    font-size:50px;
  }
`;

const Paragraph = styled.p`
  font-size: 36px; 
  
  @media (max-width: 768px) {
    font-size:20px;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <Content>
        <Heading1>Rift Valley</Heading1>
        <Heading2>Corporation</Heading2>
        <Paragraph>
        Our mission is to develop prosperity from the African land, water and resources entrusted to us.
        </Paragraph>
      </Content>
    </HeroSection>
  );
}

export default Hero;
