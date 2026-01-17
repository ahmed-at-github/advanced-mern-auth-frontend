import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "./_components/Header";
import Asidebar from "./_components/Asidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {/* <AuthProvider></AuthProvider> */}
      <SidebarProvider>
        <Asidebar />
        <SidebarInset>
          <Header />
          <main className="w-full">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
