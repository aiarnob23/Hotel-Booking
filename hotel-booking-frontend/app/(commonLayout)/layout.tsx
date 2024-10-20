import type { Metadata } from "next";
import NavBar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Switz Hotels",
  description: "Next Level Riding Sharing Service",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
