import React, { useEffect, useState } from "react";
import { AvatarImg } from "./style";
import { User } from "./types";

const Avatar: React.FC = () => {
  const [user, setUser] = useState<User>({
    avatar: "",
    name: ""
  });

  useEffect(() => {
    fetch("https://api.github.com/users/alisson2014")
      .then(response => response.json())
      .then(data => {
        setUser({
          avatar: data.avatar_url,
          name: data.name
        });
      })
  }, []);

  return (
    <section>
      <AvatarImg
        src={user.avatar}
        alt={user.name}
        title={user.name}
      />
    </section>
  );
};

export default Avatar;