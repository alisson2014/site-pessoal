import { LiItem } from "./style";

interface ISocialItem {
  href: string
  target?: string
  children: any
};

const SocialItem = ({
  href, target, children
}: ISocialItem) => {
  return (
    <LiItem>
      <a href={href} target={target}>
        {children}
      </a>
    </LiItem>
  );
};

export default SocialItem;