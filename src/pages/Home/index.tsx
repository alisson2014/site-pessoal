import { useEffect, useState } from "react";
import { Avatar, ContentMe } from "../../components";
import { HomeContainer } from "./atoms";

const Home = () => {
  const [user, setUser] = useState({
    avatar: "", name: ""
  });

  useEffect(() => {
    fetch("https://api.github.com/users/alisson2014")
      .then(response => response.json())
      .then(data => {
        setUser({
          avatar: data.avatar_url,
          name: data.name
        })
      })
  }, []);

  return (
    <HomeContainer>
      <ContentMe />
      <Avatar src={user.avatar} alt={user.name} />
    </HomeContainer>
  );
};

export default Home;