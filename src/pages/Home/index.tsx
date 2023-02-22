import * as Atoms from "./atoms"
import { useEffect, useState } from "react";
import { Button } from "../../components";

const Home = () => {
  const [user, setUser] = useState({ avatar: "" });

  useEffect(() => {
    fetch("https://api.github.com/users/alisson2014")
      .then(response => response.json())
      .then(data => {
        setUser({
          avatar: data.avatar_url
        })
      })
  }, []);

  return (
    <Atoms.FlexBox>
      <Atoms.Content>
        <Atoms.TittleContent>
          Olá, eu sou o
        </Atoms.TittleContent>
        <Atoms.Tittle>
          Alisson Vinicius
        </Atoms.Tittle>
        <Atoms.TittleContent>
          Desenvolvedor Web/Mobile
        </Atoms.TittleContent>
        <Button href="https://www.linkedin.com/in/alisson-vinicius-morais-de-almeida-027553252"
          target="_blank" text="Linkedin"
        />
      </Atoms.Content>
      <div className="foto-github">
        <img src={user.avatar} alt="Alisson" className="foto-github" />
      </div>
    </Atoms.FlexBox>
  );
};

export default Home;