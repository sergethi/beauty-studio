import React from "react";
import { customers } from "../lib/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

const CustomerRatings = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-full p-10">
      <p className="md:text-6xl sm:text-4xl xs:text-3xl text-pink-600 font-bold">What They Say</p>
      <div className="flex flex-wrap items-center justify-center max-w-full gap-8 p-10">
        {customers.map((customer) => {
          return (
            <Card key={customer.id} className="max-w-lg w-full">
              <CardHeader className="flex gap-3">
                <Image
                  alt={customer.name}
                  height={40}
                  radius="sm"
                  src={customer.image_url}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{customer.name}</p>
                  <p className="text-small text-default-500">
                    {customer.occupation}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                {customer.message}
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                {[...Array(customer.stars)].map((_, i) => (
                  <span key={i} id="stars" className="text-pink-600">
                    <FaStar />
                  </span>
                ))}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerRatings;
