import RedirectButton from "./component/redirect-button";

const TestSlowComponent = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow component loaded");
    }, 4000);
  });
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Simulate a slow component
  const slowComponent = await TestSlowComponent();
  console.log(slowComponent);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl font-bold">Service Details</h1>
      <p className="mt-2 text-lg">Slug: {slug}</p>

      <RedirectButton />
    </div>
  );
}
