"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google") => {
    //TODO: social login action
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        Login with Google
      </Button>
    </div>
  );
};