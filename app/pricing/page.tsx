import React from "react";
import Makeup from "../components/pricing/makeup";
import HairStyling from "../components/pricing/hair-styling";
import HairColoring from "../components/pricing/hair-coloring";
import BridalStyling from "../components/pricing/bridal-styling";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import BusinessHours from "../components/business-hours";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

const Pricing = () => {
  return (
    <div className="z-0 flex flex-col items-center max-w-full gap-8 mb-40">
      <div className="z-1 flex flex-col items-center w-full max-w-6xl h-[50vh] gap-12 p-10 text-center justify-center bg-[url('/images/salon-benyamin-bohlouli-unsplash.jpg')] bg-cover bg-center opacity-1">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="z-10 text-5xl font-bold">
          Expert Beauty Services for Radiant Results
        </p>
        <p className="z-10 text-3xl">Learn more about what we offer</p>
        <div className="z-10 w-32 h-1 bg-danger"></div>
        <Button
          radius="none"
          color="danger"
          as={Link}
          href="/book"
          className="p-10 text-xl"
        >
          Book an appointement
        </Button>
      </div>
      <p className="z-10 text-6xl font-bold text-left max-w-6xl w-full">
        Our prices
      </p>
      <Makeup />
      <HairStyling />
      <HairColoring />
      <BridalStyling />
      <div className="w-full rounded-lg">
        <BusinessHours className1="max-w-lg" className2="max-w-lg" />
      </div>
    </div>
  );
};

export default Pricing;
