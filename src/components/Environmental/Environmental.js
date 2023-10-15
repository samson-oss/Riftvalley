import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import environmentalImage from '../../imgs/enviromental.png'; 
import tobbaco from'../../imgs/PROCESSING.png'


const EnvironmentalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11rem 9% 4rem;
  gap:60px;

  background-image:url(${tobbaco});
  @media (max-width:1200px) {
    flex-direction:column;
    text-align:left;
 }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px; 
`;

const Heading2 = styled.h2`
font-size: 48px;
line-height: 50px; 
margin-bottom:35px;
font-family: 'Frutiger_bold'; 
color:#ffff;
`;

const Paragraph = styled.p`
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px; 
text-transform: capitalize;
letter-spacing: 0.32px;
font-family: 'Frutiger'; 

`;

const TextWithArrow = styled.a`
  display: flex;
  
  align-items: center;
  text-decoration: none;
  color: #ffff; 
  font-weight: normal;
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline; 
`;

const ArrowIcon = styled(FaArrowRight)`
  font-size: 2rem;
  margin-left: 5px; 
  border: 1px solid #ffff; 
  padding: 10px; 
  border-radius: 50px; 
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
`;

function Environmental() {
  return (
    <EnvironmentalSection>
       
              <Image src={environmentalImage} alt="Environmental Image" />

      <TextContainer>
        <Heading2>Environment, Social and Governance</Heading2>
        <Paragraph>
        Northern Tobacco work alongside our suppliers to promote positive change in the areas and communities in which we operate. We are striving to achieve long-term sustainability and profitability for our shareholders, company, growers and the people of Zimbabwe. We do this by creating shared value through our stewardship of environmental resources, by putting the needs of people into the heart of our and our supplier’s operations and ensuring we follow ethical business practices.          </Paragraph>
        <TextWithArrow href="#">
        READ MORE ABOUT ESG <ArrowIcon />
        </TextWithArrow>
      </TextContainer>
    </EnvironmentalSection>
  );
}

export default Environmental;
