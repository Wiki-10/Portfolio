import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br></br>
        My Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to showcase the projects i've made
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Contact me!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
