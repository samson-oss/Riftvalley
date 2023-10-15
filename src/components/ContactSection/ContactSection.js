// ContactSection.js
import React from 'react';
import styled from 'styled-components';
import tobbaco from'../../imgs/contact.png'

const ContactContainer = styled.div`
  margin-top:10px;
  display: flex;
  background-image:url(${tobbaco});
  background-size: cover;
  padding: 4rem 9% 4rem;
  
`;

const GreenBox = styled.div`
  display: flex;
width: 481px;
padding: 39px 41px 43px 51px;
flex-direction: column;
align-items: flex-start;
gap: 19px;
flex-shrink: 0;
background: #00843D;
@media (max-width:568px) {
    width: 350px;
}
@media (max-width:385px) {
    width: 300px;
}
@media (max-width:280px) {
    width: 250px;
}

`;


const H2 = styled.h2`
color: #FFF;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
font-family: 'Frutiger_bold'; 

`;
const P = styled.p`
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 30px;
font-family: 'Frutiger'; 

`;

const ContactSection = () => {
  return (
    <ContactContainer>
      <GreenBox>
        <H2>Get in touch  <br/>
with us </H2>
        <P>12 – 14 Paisley Road, Southerton, Harare <br/>

Telephone: +263 8677 007 128</P>
    
      </GreenBox>
     
    </ContactContainer>
  );
};

export default ContactSection;
