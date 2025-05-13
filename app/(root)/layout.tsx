import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/Navbar/navbar";

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
