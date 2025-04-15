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
          <div className="flex flex-col items-center justify-center size-full gap-12">
            <div className="flex w-full items-center gap-4">
              <Image
                src="/logo-hero.png"
                alt="Public-library-logo"
                width={100}
                height={100}
                priority
              />
              <h1 className="flex-[1_1_auto] text-4xl md:text-5xl font-extrabold">
                General Trias City Public Library
              </h1>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Building a Brighter Future:
              </h2>
              <p className="text-xl md:text-3xl">
                General Trias e-Library Empowers Students with Free Services.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-start flex[1_1_100%] gap-4 place-self-end pb-8">
            <h2 className="text-xl md:text-3xl font-bold">Office Hours:</h2>
            <h3 className="text-md  font-medium">
              Monday: <span className="font-bold">7 am - 4 pm</span>
            </h3>
            <h3 className="text-mdfont-medium">
              Tuesday-Friday: <span className="font-bold">8 am - 5 pm</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
