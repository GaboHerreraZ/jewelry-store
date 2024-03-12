import { getSubcategories } from "@/actions";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Menu = async ({ children }: { children: React.ReactNode }) => {
  const subcategories = await getSubcategories();

  return (
    <>
      <div className="hidden md:block">
        <DesktopMenu subcategories={subcategories}>{children}</DesktopMenu>
      </div>
      <div className="block md:hidden">
        <MobileMenu>{children}</MobileMenu>
      </div>
    </>
  );
};
