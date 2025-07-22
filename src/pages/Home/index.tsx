import { Avatar, ContentMe } from "components";
import { HomeContainer } from "./atoms";
import { IHome } from "./types";

const Home = ({ position, linkedin }: IHome) => {
  return (
    <HomeContainer>
      <ContentMe position={position} linkedin={linkedin} />
      <Avatar />
    </HomeContainer>
  );
};

export default Home;