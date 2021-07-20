import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Email :</LinkTitle>
     <LinkItem href="mailto:bensalladiallo@hotmail.com">bensalladiallo@hotmail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>Don't fear failure, fear being in exact same place next year as you are today.</Slogan>
       </CompanyContainer>
       <SocialContainer>
       <SocialIcons href="https://github.com/babson89">
      <AiFillGithub size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/salla-diallo-a901b4125/">
      <AiFillLinkedin size="3rem" />
     </SocialIcons>
     <SocialIcons href="https://twitter.com/SallaDiallo15">
      <AiFillTwitterSquare size="3rem" />
     </SocialIcons>
     </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  )
};

export default Footer;
