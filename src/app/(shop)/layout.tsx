import { getUser } from "@/actions";
import { CartSidebar, ProfileSidebar } from "@/components";
import { Menu } from "@/components/ui";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { email } = await getUser();

  return (
    <main>
      <Menu>{children}</Menu>
      <ProfileSidebar email={email!} />
      <CartSidebar />
      {/* <Footer /> */}
    </main>
  );
}
