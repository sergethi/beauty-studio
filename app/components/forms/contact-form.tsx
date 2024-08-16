"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { services } from "../../lib/data";

const ContactForm = () => {
  const [values, setValues] = React.useState(new Set([]));
  const handleSelectionChange = (e) => {
    setValues(new Set(e.target.value.split(",")));
  };
  return (
    <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center max-w-6xl w-full gap-8">
      <div className="flex flex-col gap-8 max-w-full">
        <Card shadow="sm" className="max-w-xl w-full p-10">
          <CardBody className="flex gap-10 overflow-visible p-0">
            <Input
              isRequired
              type="text"
              label="Full name"
              placeholder="Enter your first name and last name"
            />
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              isRequired
            />
            <Input
              isRequired
              type="tel"
              label="Phone number"
              placeholder="Enter your phone number"
            />
            <Select
              label="Services"
              selectionMode="multiple"
              placeholder="Select a service"
              defaultSelectedKeys={["Makeup"]}
              className="max-w-xs"
              selectedKeys={values}
              onChange={handleSelectionChange}
            >
              {services.map((service, index) => (
                <SelectItem key={index}>{service.name}</SelectItem>
              ))}
            </Select>
            <Textarea
              isRequired
              variant="flat"
              label="Message"
              placeholder="Enter your message"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
            <Button
              radius="lg"
              color="danger"
              className="p-10 text-xl"
            >
              Send
            </Button>
          </CardBody>
          {/* <CardFooter className="flex-col items-start gap-8 p-10">
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
            </CardFooter> */}
        </Card>
      </div>
      <div className="flex flex-col gap-8 max-w-full">
        <Card shadow="sm" isPressable className="max-w-xl w-full">
          <CardBody className="overflow-visible p-0">
            {/* <Image
                shadow="sm"
                radius="lg"
                alt={}
                className="w-full h-full object-cover"
                src={}
              /> */}
          </CardBody>
          {/* <CardFooter className="flex-col items-start gap-8 p-10">
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
            </CardFooter> */}
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
