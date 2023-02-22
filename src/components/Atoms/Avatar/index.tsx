import { AvatarImg } from "./atoms";

interface IAvatar {
  src: string
  alt?: string
}

const Avatar = ({ src, alt }: IAvatar) => {
  return (
    <div>
      <AvatarImg src={src} alt={alt} />
    </div>
  );
};

export default Avatar;