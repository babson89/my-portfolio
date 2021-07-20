import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hi There, I'm Salla <br />
       Web Developer
     </SectionTitle>
     <SectionText>
      The purpose of this portfolio is to show my accomplishments, skills, experiences, and attributes. It also showcases some of my best work and achievements. 
     </SectionText>
     <Button onClick={() => window.location ='https://github.com/babson89'}>Learn More</Button>
   </LeftSection>
  </Section>
);

export default Hero;