import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopMenu>{children}</DesktopMenu>
      </div>
      <div className="block md:hidden">
        <MobileMenu>{children}</MobileMenu>
      </div>
    </>
  );
};
