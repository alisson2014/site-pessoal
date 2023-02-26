import * as Atoms from "./atoms"
import { useEffect, useState } from "react";
import { Avatar, Button } from "../../components";
import { Tittle } from "../../components/Atoms/Tittles";

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
    <Atoms.FlexBox>
      <Atoms.Content>
        <Atoms.TittleContent>
          Olá, eu sou o
        </Atoms.TittleContent>
        <Tittle>
          Alisson Vinicius
        </Tittle>
        <Atoms.TittleContent>
          Desenvolvedor Web/Mobile
        </Atoms.TittleContent>
        <Button href="https://www.linkedin.com/in/alisson-vinicius-morais-de-almeida-027553252/" text="Linkedin" />
      </Atoms.Content>
      <Avatar src={user.avatar} alt={user.name} />
    </Atoms.FlexBox>
  );
};

export default Home;