import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";

const Discount = () => {
  return (
    <div>
      <Card
        className="z-0 h-[60vh] w-full bg-[url('https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=1497&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-1"
        radius="none"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay */}
        <CardBody className="z-10 flex flex-col items-center gap-12 text-center justify-center">
          <p className="text-7xl max-w-5xl">GET 10% DISCOUNT ON YOUR FIRST VISIT!</p>
          <p className="text-2xl max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            commodi doloremque, repudiandae beatae itaque consequuntur sunt
            eligendi tenetur sequi soluta qui natus consequatur molestiae error
            quibusdam rem vel! Provident, id.
          </p>
          <div className="w-32 h-1 bg-pink-600"></div>
          <Button radius="none" color="danger" className="p-10 text-xl">
            CALL NOW : 123-456-789
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Discount;
