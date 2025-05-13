import Navbar from "@/components/ui/Navbar/navbar";
import Footer from "@/components/ui/footer";

const ServicesLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default ServicesLayout;
