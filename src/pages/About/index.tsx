import { AboutMe, AboutImg } from "../../components";
import { AboutContainer } from "./atoms";

const About = () => {
  return (
    <AboutContainer>
      <AboutMe />
      <AboutImg />
    </AboutContainer>
  );
};

export default About;