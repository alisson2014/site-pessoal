import { Avatar, ContentMe } from "components";
import { HomeContainer } from "./atoms";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ContentMe />
      <Avatar />
    </HomeContainer>
  );
};

export default Home;