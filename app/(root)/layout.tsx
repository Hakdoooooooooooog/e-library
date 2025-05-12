import Footer from "@/components/UI/footer";

import Navbar from "@/components/UI/Navbar/navbar";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main
        role="main"
        className="min-h-dvh antialiased bg-background text-foreground"
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
