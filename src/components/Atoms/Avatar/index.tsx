import { AvatarImg } from "./atoms";

interface IAvatar {
  src: string
  alt?: string
}

const Avatar = ({ src, alt }: IAvatar) => {
  return (
    <section>
      <AvatarImg src={src} alt={alt} />
    </section>
  );
};

export default Avatar;