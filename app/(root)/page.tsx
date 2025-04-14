import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="section-container p-0">
        <div className="hero-image-container">
          <Image
            priority
            className="hero-image"
            fill
            src="/hero-img.jpeg"
            alt="Hero-image"
          />
        </div>
        <span className="hero-image-overlay"></span>
        <div className="hero-content-container">
          <div className="flex items-center justify-center gap-4">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
            <h1 className="hero-title">E-Library</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="hero-subtitle">Welcome to E-Library</h2>
            <p className="hero-description">
              Your one-stop solution for all your reading needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
