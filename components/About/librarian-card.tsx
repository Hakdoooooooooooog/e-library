import AboutUsCardContent from "./librarian-card-content";
import AboutUsCardImage from "./librarian-card-image";

const AboutUsCard = ({
  librarianName,
  designation,
}: {
  librarianName: string;
  designation: string;
}) => {
  return (
    <div className="relative size-60 md:size-72 overflow-hidden  bg-white transition-transform duration-300 ease-in-out hover:scale-105">
      <AboutUsCardContent>
        <div className=" flex flex-col items-center text-center overflow-hidden">
          <AboutUsCardImage />
        </div>
        <div className="w-full flex flex-col items-center text-center text-white mt-4">
          <h2 className="text-lg font-bold">{librarianName}</h2>
          <p className="text-sm text-muted-foreground">{designation}</p>
        </div>
      </AboutUsCardContent>
    </div>
  );
};

export default AboutUsCard;
