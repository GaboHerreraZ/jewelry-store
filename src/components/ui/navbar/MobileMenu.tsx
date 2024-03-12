import Image from "next/image";

import logo from "../../../../public/png/bellarte-icono.png";
import { Profile } from "./Profile";
import { MobileToggleButton } from "./MobileToggleButton";
import { MobileToggleMenu } from "./MobileToggleMenu";

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky z-50 top-0 ">
        <nav className=" relative ">
          <header className="grid grid-flow-col z-10 bg-slate-950 items-center text-white w-full p-2 ">
            <MobileToggleButton />
            <div className="flex w-full relative  justify-self-center flex-row">
              <Image
                className="z-10 "
                src={logo}
                alt="Bellarte Joyería"
                width={100}
              />
              <Profile />
            </div>
          </header>
          <MobileToggleMenu />
        </nav>
      </div>

      {children}
    </>
  );
};
