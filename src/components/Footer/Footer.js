import React from 'react';
import styled from 'styled-components';
import footer from '../../imgs/footer.png'

const FooterContainer = styled.footer`
  background-color: #FFFFFF;
  color: #fff;
  padding: 6rem 9% 3rem;
  text-align: center; 
`;

const FooterContent = styled.div`
display: flex;
  align-items: center;
gap:130px;
@media (max-width:991px) {
   flex-direction:column;
   align-items:center;
   text-align:center;
   gap:30px;
}

`;

const UlContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap:30px;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin: 0 10px;
color: #363636;
font-family: 'Frutiger'; 

`;

const GreyLine = styled.hr`
  background-color: #ccc;
  height: 1px;
  border: none;
  width: 70%;
  margin: 20px 0;
  @media (max-width:991px) {
    width: 100%;
}
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`

  margin-left: 30px;
  @media (max-width:280px) {
  margin:0;
}
`;

const Text = styled.p`
  color:#1E1E1E;
  text-align:left;
  font-family: 'Frutiger'; 
  margin-left:280px;
  @media (max-width:991px) {
    margin-left:20px;
}
@media (max-width:280px) {
  margin:0;
}
`;
const P = styled.p`
line-height: 30px; 
font-size: 16px;
text-align:left;
margin-left:180px;
margin-bottom:24px;
color: #000;
font-family: 'Frutiger'; 
@media (max-width:991px) {
margin:0;

} 
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <P>Our mission is to develop prosperity from the     <br/>
  African land,  water and resources entrusted to us.</P>
        <UlContainer>
          <ListItem>Northern Tobacco</ListItem>
          <ListItem>TPZ</ListItem>
          <ListItem>ESG</ListItem>
          <ListItem>Contact Us</ListItem>
        </UlContainer>
      </FooterContent>
      <GreyLine />
      <FooterContent>
        <LogoContainer>
          <LogoImage src={footer} alt="Logo" />
          <Text> ©2023 Rift Valley •  Built by Uncommon.org, a non-profit website development company</Text>
        </LogoContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
