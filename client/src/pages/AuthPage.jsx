import { HyperspaceBackground } from "@/components/ui/hyperspace-background";
import { StarButton } from "@/components/ui/star-button";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import React from "react";

const AuthPage = () => {
  return (
    <div className="relative flex h-[100%] w-full items-center justify-center overflow-hidden bg-black flex-col">
      <HyperspaceBackground />
      <h1 className="font-poppins relative z-10 bg-gradient-to-br from-white to-zinc-500 bg-clip-text px-2 py-2 mb-4 text-center text-3xl  lg:text-6xl font-semibold text-transparent">
        Unlock Your WorkBook <br />
        Where Productivy happens
          </h1>
      <SignedOut>
        <SignInButton mode="modal">
          <StarButton className="rounded-b-2xl w-25 text-[16px] font-extrabold">Sing In</StarButton>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default AuthPage;
