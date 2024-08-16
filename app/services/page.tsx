import React from "react";
import { services } from "../lib/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import BusinessHours from "../components/business-hours";

const Services = () => {
  return (
    <div className="z-0 flex flex-col items-center max-w-full gap-8 mb-40">
      <div className="z-1 flex flex-col items-center w-full max-w-6xl h-[50vh] gap-12 p-10 text-center justify-center bg-[url('https://images.unsplash.com/photo-1633681926053-9074b76e21a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-1">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="z-10 text-5xl font-bold">
          Expert Beauty Services for Radiant Results
        </p>
        <p className="z-10 text-3xl">Learn more about what we offer</p>
        <div className="z-10 w-32 h-1 bg-danger"></div>
        <Button radius="none" color="danger" as={Link} href="/book" className="p-10 text-xl">
          Book an appointement
        </Button>
      </div>
      <p className="z-10 text-6xl font-bold text-left max-w-6xl w-full">
        Our services
      </p>

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center max-w-6xl w-full gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-8 max-w-full">
            <Card
              shadow="sm"
              key={index}
              isPressable
              className="max-w-xl w-full"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  alt={service.name}
                  className="w-full h-full object-cover"
                  src={service.image_url}
                />
              </CardBody>
              <CardFooter className="flex-col items-start gap-8 p-10">
                <b className="text-3xl">{service.name}</b>
                <div className="w-32 h-1 bg-pink-600"></div>
                <p className="text-default-500 text-left">
                  {service.description}
                </p>
                <a
                  href="/pricing"
                  className="inline-block p-3 text-xl text-white bg-danger rounded-lg"
                >
                  Learn more
                </a>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="w-full rounded-lg">
        <BusinessHours className1="max-w-lg" className2="max-w-lg" />
      </div>
    </div>
  );
};

export default Services;
