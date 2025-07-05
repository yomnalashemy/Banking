import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let loggedIn = null;
  
  try {
    loggedIn = await getLoggedInUser();
  } catch (error) {
    // No session - this is fine, user will see intro screen
    console.log("No session in layout");
  }

  // If no logged in user, just show the children (which will be the intro screen)
  if (!loggedIn) {
    return (
      <html lang="en">
        <body className="font-inter">
          {children}
        </body>
      </html>
    );
  }

  // If user is logged in, show the full layout with sidebar
  return (
    <html lang="en">
      <body className="font-inter">
        <main className="flex h-screen w-full">
          <Sidebar user={loggedIn} />
          <div className="flex size-full flex-col">
            <div className="root-layout">
              <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
              <div>
                <MobileNav user={loggedIn} />
              </div>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}