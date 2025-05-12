"use client";
import { Button } from "@/components/UI/button";
import { useRouter } from "next/navigation";

const RedirectButton = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <Button size={"lg"} variant={"outline"} onClick={handleRedirect}>
      Go to Home
    </Button>
  );
};

export default RedirectButton;
