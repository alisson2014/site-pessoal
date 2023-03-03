import { useEffect, useState } from "react";
import { AvatarImg } from "./atoms";

const Avatar = () => {
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
    <section>
      <AvatarImg src={user.avatar} alt={user.name} />
    </section>
  );
};

export default Avatar;