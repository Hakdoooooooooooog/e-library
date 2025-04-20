import Navbar from "@/components/ui/Navbar/navbar";
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main
        role="main"
        className="h-dvh antialiased bg-background text-foreground"
      >
        {children}
      </main>
    </>
  );
};

export default RootLayout;
