import { AboutMe, AboutImg } from "components";
import { AboutContainer } from "./style";

const About = ({ about }: { about: string }) => {
  return (
    <AboutContainer>
      <AboutMe about={about} />
      <AboutImg />
    </AboutContainer>
  );
};

export default About;