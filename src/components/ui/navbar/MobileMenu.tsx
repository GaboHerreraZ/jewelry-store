import Image from "next/image";

import logo from "../../../../public/png/Logo_negro.png";
import { Profile } from "./Profile";
import { MobileToggleButton } from "./MobileToggleButton";
import { MobileToggleMenu } from "./MobileToggleMenu";

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky z-50 top-0 ">
        <nav className="grid bg-white">
          <header className="flex justify-around z-10  items-center text-white w-full p-2 ">
            <MobileToggleButton />
            <div className="flex ml-2 w-full relative  justify-self-center flex-row">
              <Image
                className="z-10 "
                src={logo}
                alt="Bellarte Joyería"
                width={100}
              />
            </div>
            <Profile />
          </header>
          <MobileToggleMenu />
        </nav>
      </div>

      {children}
    </>
  );
};
