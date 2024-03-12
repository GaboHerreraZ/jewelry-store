export interface Action {
  id: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
