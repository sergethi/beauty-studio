import React from "react";
import { Button, Image } from "@nextui-org/react";

const BusinessHours = () => {
  return (
    <div className="flex flex-row-reverse w-full items-center justify-center gap-32 p-10">
      <div className="lex-shrink-0 w-full max-w-lg">
        <Image
          className="object-cover w-full h-auto"
          alt="NextUI hero Image"
          src="https://images.unsplash.com/flagged/photo-1575277942704-3b02a862e5f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="w-full max-w-md">
        <p className="text-6xl font-bold">Open hours</p>
        <p className="mt-4 mb-6 text-base leading-relaxed">Monday : Closed</p>
        <p className="mt-4 mb-6 text-base leading-relaxed">
          Tuesday – Friday : 10am – 8pm
        </p>
        <p className="mt-4 mb-6 text-base leading-relaxed">
          Saturday : 9am – 6pm
        </p>
        <p className="mt-4 mb-6 text-base leading-relaxed">
          Sunday : 12pm – 6pm
        </p>
        {/* <Button radius="none" color="danger" className="p-10 text-xl">
          Know More
        </Button> */}
      </div>
    </div>
  );
};

export default BusinessHours;
