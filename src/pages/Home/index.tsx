import { Avatar, ContentMe } from "components";
import { HomeContainer } from "./atoms";

const Home = () => {
  return (
    <HomeContainer>
      <ContentMe />
      <Avatar />
    </HomeContainer>
  );
};

export default Home;