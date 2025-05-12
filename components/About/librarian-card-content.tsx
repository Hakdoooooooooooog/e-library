const AboutUsCardContent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="absolute bottom-0 left-0 flex items-center justify-center rounded-full w-full h-fit p-4 bg-gradient-to-tr from-green-300 to-green-800">
      {children}
    </div>
  );
};

export default AboutUsCardContent;
