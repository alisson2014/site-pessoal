import { FlexBox } from "./atoms";
import Button from "../../components/Atoms/Button";
import { useEffect, useState } from "react";

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
    <FlexBox>
      <div className="sobre">
        <span className="ola">
          Olá, eu sou o
        </span>
        <span className="nome">
          Alisson Vinicius
        </span>
        <span className="dev">
          Desenvolvedor Web/Mobile
        </span>
        <Button href="https://www.linkedin.com/in/alisson-vinicius-morais-de-almeida-027553252"
          target="_blank" text="Linkedin"
        />
      </div>
      <div className="foto-github">
        <img src={user.avatar} alt="Alisson" className="foto-github" />
      </div>
    </FlexBox>
  );
};

export default Home;