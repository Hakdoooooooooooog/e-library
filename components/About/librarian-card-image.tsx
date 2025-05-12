import Image from "next/image";

const AboutUsCardImage = () => {
  return (
    <>
      <div className="absolute size-36 rounded-full -top-12 left-1/2 -translate-1/2">
        <Image
          src="https://placehold.co/800x600/gray/white?text=placeholder+librarian+image"
          alt="Placeholder librarian image"
          className="rounded-2xl object-cover"
          fill
          sizes="(max-width: 768px) 9rem,  9rem"
        />
      </div>
      {/* Reflection */}
      <div className="absolute size-36 -top-12 left-1/2 -translate-1/2 mt-36">
        <Image
          src="https://placehold.co/800x600/gray/white?text=placeholder+librarian+image"
          alt="Reflection"
          className="rounded-2xl object-cover opacity-20 rotate-180 scale-y-[-1] mt-4"
          fill
          sizes="(max-width: 768px) 9rem,  9rem"
        />
      </div>
    </>
  );
};

export default AboutUsCardImage;
