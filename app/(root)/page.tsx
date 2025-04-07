import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="section-container">
        <Image
          priority
          className="hero-image"
          fill
          src="/hero-img.webp"
          alt="Hero-image"
        />
        <span className="hero-image-overlay"></span>
      </section>
      <section id="home" className="h-dvh bg-black">
        <h1>Next section</h1>
      </section>
    </>
  );
}
