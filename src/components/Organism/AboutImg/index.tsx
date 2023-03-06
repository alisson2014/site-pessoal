import { AbImg } from "./atoms";

const AboutImg = () => {
  return (
    <AbImg>
      <img src={require("./tech.jpg")} alt="image" />
    </AbImg>
  );
};

export default AboutImg;