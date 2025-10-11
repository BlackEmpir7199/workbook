import { SignedIn, UserButton } from "@clerk/clerk-react";
import React from "react";

const HomePage = () => {
  return (
    <SignedIn>
      <UserButton/>
    </SignedIn>
  );
};

export default HomePage;
