import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'; 
import pics from '../../imgs/process.png'
import tobbaco from'../../imgs/PROCESSING.png'

const ProcessingSection = styled.div`
  display: flex;
  gap:80px;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 9% 5rem;
  background-image:url(${tobbaco});
 
  color: #ffff; 
  @media (max-width:1200px) {
    flex-direction:column;
    text-align:left;
 }
`;

const TextContainer = styled.div`
  flex: 1;
  @media (max-width:1073px) {
   
 }
`;

const Heading2 = styled.h2`
font-size: 48px;
line-height: 50px; 
margin-top:10px;
font-family: 'Frutiger_bold', sans-serif;

@media (min-width:1200px) {
    width:500px;
}


`;

const Paragraph1 = styled.p`
line-height: 30px; 
font-size: 16px;
margin-top:40px;
font-family: 'Frutiger'; 

color: #ffff; 
`;


const Paragraph2 = styled.p`
line-height: 30px; 
font-size: 16px;
margin-top:20px;
color: #ffff; 
font-family: 'Frutiger'; 

`;

const Paragraph3 = styled.p`
line-height: 30px; 
font-size: 16px;
margin-top:20px;
color: #ffff; 
font-family: 'Frutiger'; 

`;


const TextWithArrow = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffff; 
  font-weight: bold;
  cursor: pointer;
  margin-top:40px;
  text-decoration: underline;

`;
const ArrowIcon = styled(FaArrowRight)`
  font-size: 2rem;
  margin-left: 20px; 
  border: 1px solid #ffff; 
  padding: 10px; 
  border-radius: 50px; 
`;


const Image = styled.img`
  flex: 1;
  max-width: 100%;
`;
function Processing() {
  return (
    <ProcessingSection>
         <Image src={pics} alt="About Image" />
      <TextContainer>
        <Heading2>Tobacco Processing Zimbabwe</Heading2>
        <Paragraph1>Found in Harare’s bustling Southerton district, Tobacco Processing Zimbabwe (TPZ) produces different product types which include thresh, butted loose leaf, hand strip, stem and strip sorting.  The company is located on a 9.2 Ha plot at the corner of Simon Mazorodze and Auckland Roads in Harare, Zimbabwe. TPZ has 7500 sqm of storage on site as well as 27000 sqms of external storage on long term lease for green storage.</Paragraph1>
        <Paragraph2> <strong>Mission </strong> “To Provide A Dedicated And Reliable Processing Service To Reputable Dealers”.</Paragraph2>
        <Paragraph3><strong>Vision </strong>  is “To Be The Global Benchmark GLT”</Paragraph3>
        <TextWithArrow href="#">
        READ MORE ABOUT TOBACCO PROCESSING ZIMBABWE <ArrowIcon />
        </TextWithArrow>
      </TextContainer>
   
    </ProcessingSection>
  );
}

export default Processing;
