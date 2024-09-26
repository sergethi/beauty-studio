"use client";
import React, { useActionState, useState, useEffect, useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";
import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { services } from "../../lib/data";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { contactData, ContactState } from "../../lib/action";

const initialState: ContactState = {
  message: "",
  errors: {},
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(new Set([]));
  const [state, formAction] = useFormState(contactData, initialState);
  const { pending } = useFormStatus();

  const handleSelectionChange = (e: any) => {
    setValues(new Set(e.target.value.split(",")));
  };
  useEffect(() => {
    if (!state.errors) {
      formRef?.current?.reset();
      setValues(new Set([]));
    }
  }, [state.errors]);

  return (
    <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center max-w-6xl w-full min-h-[734px] gap-8">
      <div className=" flex flex-col max-w-full h-full">
        <Card shadow="sm" className="max-w-xl w-full p-10 h-full">
          <CardBody className="overflow-visible p-0 h-full">
            <form
              action={formAction}
              ref={formRef}
              className="flex flex-col justify-center gap-6 h-full"
            >
              <div>
                <Input
                  type="text"
                  label="Full name"
                  name="fullname"
                  placeholder="Enter your first name and last name"
                />
                <div aria-live="polite" aria-atomic="true">
                  {state.errors?.fullName &&
                    state.errors.fullName.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                />
                <div aria-live="polite" aria-atomic="true">
                  {state.errors?.email &&
                    state.errors.email.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>
              <div>
                <Input
                  type="tel"
                  label="Phone number"
                  name="phonenumber"
                  placeholder="Enter your phone number"
                />
                <div aria-live="polite" aria-atomic="true">
                  {state.errors?.phoneNumber &&
                    state.errors.phoneNumber.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>

              <div>
                <Select
                  label="Services"
                  name="services"
                  variant="bordered"
                  selectionMode="multiple"
                  placeholder="Select a service"
                  className="max-w-xs"
                  selectedKeys={values}
                  onChange={handleSelectionChange}
                >
                  {services.map((service) => (
                    <SelectItem key={service.name} className="text-slate-200">{service.name}</SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <Textarea
                  variant="flat"
                  label="Message"
                  name="message"
                  placeholder="Enter your message"
                  className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                />
                <div aria-live="polite" aria-atomic="true">
                  {state.errors?.contactMessage &&
                    state.errors.contactMessage.map((error: string) => (
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    ))}
                </div>
              </div>

              <Button
                radius="lg"
                color="danger"
                className="p-10 text-xl"
                type="submit"
                aria-disabled={pending}
              >
                {pending ? "Sending..." : "Send"}
              </Button>
              <div aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-md text-red-500">{state.message}</p>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col max-w-full h-full">
        <Card shadow="sm" className="max-w-xl w-full h-full">
          <CardBody className="overflow-visible p-0 h-ful">
            <div className="flex flex-col gap-32 items-center text-center justify-center p-10 h-full">
              <div className="flex flex-col gap-2 items-center">
                <div className="text-6xl font-bold">
                  <FaPhoneAlt />
                </div>
                123-456-789
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="text-6xl font-bold">
                  <FaEnvelope />
                </div>
                contact@example.com
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="text-6xl font-bold">
                  <FaMapMarkerAlt />
                </div>
                Fifth Avenue, New York
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
