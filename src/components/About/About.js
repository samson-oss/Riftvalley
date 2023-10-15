import React from 'react';
import styled from 'styled-components';
import about from '../../imgs/about.png';





const AboutSection = styled.div`
  display: flex;
  gap:90px;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 9% 6rem;
  @media (max-width: 768px) {
    display:block;
  }
  @media (max-width:1200px) {
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:left;
  }
`;

const TextContainer = styled.div`
  flex: 1;

`;

const LeftText = styled.p`
 font-size: 36px;
 font-family: 'Frutiger_bold', sans-serif;
 font-weight: 500; 
  font-size: 36px;
font-style: normal;
 line-height: 44px;
 @media (max-width:1073px) {
    font-size:20px;
 }
`;

const RightText = styled.p`
font-size: 16px;
margin-top:30px ;
line-height: 30px; 
font-family: 'Frutiger'; 

`;


const Image = styled.img`
  flex: 1;
  max-width: 100%;
`;

const GreenText = styled.span`
  color:  #00843D;

`;

function About() {
  return (
    <AboutSection>
      <TextContainer>
      <LeftText>
      <GreenText>"</GreenText>To be responsible stewards of the land, water and ecosystems entrusted to us; Developing our assets profitably for the long-term prosperity of our shareholders and the people of Zimbabwe;
<GreenText> Rebuilding and restoring the assets, ecosystems and human capital</GreenText> we depend at and allowing the environment, and the communities that rely on it, to flourish.<GreenText>"</GreenText>
</LeftText>
        <RightText>
        Formally established in 2012, Rift Valley Corporation has evolved to become, a leading tobacco business in Zimbabwe. Environmental integrity, community dignity and corporate profitability informs Rift Valley’s operational mandate. We aim to facilitate opportunities for the environments we operate in, and communities we work alongside, to flourish and thrive. Northern Tobacco and TPZ are subsidiaries of Rift Valley Corporation.        </RightText>
      </TextContainer>
      <Image src={about} alt="About Image" />
    </AboutSection>
  );
}

export default About;

