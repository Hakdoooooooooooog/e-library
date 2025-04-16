import Navbar from "@/components/ui/Navbar/navbar";
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main role="main" className="antialiased">
        {children}
      </main>
    </>
  );
};

export default RootLayout;
