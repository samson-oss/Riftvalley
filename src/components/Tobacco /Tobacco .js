import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'; 
import pic from '../../imgs/tobbaco.png'


const TobaccoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 9% 7rem;
  flex-direction: row-reverse;
gap:90px;
  background-color: #ffff; 
  @media (max-width: 1200px){
    flex-direction: column; 
    text-align: left; 

  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px; 
  order: 2; 
`;

const Heading2 = styled.h2`
font-size: 48px;
margin-bottom:50px;
font-family: 'Frutiger_bold'; 
`;

const Paragraph = styled.p`
 line-height: 30px; 
 font-family: 'Frutiger'; 

`;


const TextWithArrow = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000; /* Text color */
  font-weight: normal;
  cursor: pointer;
  margin-top:40px;
  line-height:30px;
  text-decoration:2px solid #00843D  underline; 

  
`;

const ArrowIcon = styled(FaArrowRight)`
  font-size: 35px;
  color:#00843D;
  margin-left: 20px; 
  border: 1px solid #00843D ; 
  padding: 10px; 
  border-radius: 50%; 

`;


const Image = styled.img`
  flex: 1;
  width: 100%;
`;


function Tobacco() {
  return (
    <TobaccoSection>
      <TextContainer>
        <Heading2>Northern Tobacco</Heading2>
        <Paragraph>Formed in 2004, Northern Tobacco was established to take advantage of Zimbabwe’s world-class growing conditions for flue-cured tobacco. Taking a holistic approach to contract farming, Northern Tobacco provides all large and small scale farmers with required inputs, working capital, agronomy guidance and marketing linkage. Northern Tobacco contracts over 6,000 farmers across the tobacco growing regions in Zimbabwe.</Paragraph>
        
        <TextWithArrow href="#">
        READ MORE ABOUT NORTHERN TOBACCO <ArrowIcon />
        </TextWithArrow>
      </TextContainer>
     
      <Image src={pic} alt="About Image" />

    </TobaccoSection>
  );
}

export default Tobacco;
