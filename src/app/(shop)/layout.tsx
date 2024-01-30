import { Menu } from "@/components/ui/navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Menu>
        <div className="h-[1500px]"> </div>
        {children}
      </Menu>
      {/* <SideBar /> */}
      {/* <Footer /> */}
    </main>
  );
}
