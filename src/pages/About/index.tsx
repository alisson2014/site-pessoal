import React from "react";
import { AboutMe, AboutImg } from "components";
import { AboutContainer } from "./style";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutMe />
      <AboutImg />
    </AboutContainer>
  );
};

export default About;