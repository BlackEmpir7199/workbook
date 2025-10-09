import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { HyperspaceBackground } from "@/components/ui/hyperspace-background";
import { StarButton } from "./components/ui/star-button";

export default function App() {
  return (
    <div className="relative flex h-[100%] w-full items-center justify-center overflow-hidden bg-black flex-col">
      <HyperspaceBackground />
      <h1 className="font-poppins relative z-10 bg-gradient-to-br from-white to-zinc-400 bg-clip-text px-2 py-2 text-center text-3xl  lg:text-6xl font-semibold text-transparent">
        Unlock Your WorkBook <br />
        Where Productivy happens
      </h1>
      <SignedOut>
          <SignInButton mode="modal">
          <StarButton className="rounded-3xl" >Sing In</StarButton>
          </SignInButton >
        </SignedOut>
    </div>
      /* <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */
  );
}
