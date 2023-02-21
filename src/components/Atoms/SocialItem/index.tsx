import * as Atoms from "./atoms"

interface ISocialItem {
  href: string
  target?: string
  children: any
};

const SocialItem = ({ href, target, children }: ISocialItem) => {
  return (
    <Atoms.SocialItem>
      <a href={href} target={target}>
        {children}
      </a>
    </Atoms.SocialItem>
  );
};

export default SocialItem;