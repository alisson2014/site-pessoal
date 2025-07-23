export interface ILinkTo {
  route: string
  title: string;
  section: string;
  onClick?: () => void;
  onSetActive?: (section: string) => void;
};