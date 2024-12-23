"use client";
import React, { useEffect, useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";
import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
  Avatar,
  User,
  Link,
  Chip,
  Textarea,
} from "@nextui-org/react";
import { services } from "../../lib/data";
import { DatePicker } from "@nextui-org/react";
import {
  now,
  getLocalTimeZone,
  parseAbsoluteToLocal,
} from "@internationalized/date";
import { bookingData, BookingState } from "../../lib/action";
import { team } from "../../lib/data";

const initialState: BookingState = {
  message: "",
  errors: {},
};

const BookingForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedValues, setSelectedValues] = React.useState<Set<string>>(
    new Set([])
  );
  const [selectedMember, setSelectedMember] = React.useState<Set<string>>(
    new Set([])
  );
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );
  const [state, formAction] = useFormState(bookingData, initialState);
  const { pending } = useFormStatus();

  const handleSelectionChange = (e: any) => {
    const { name, value } = e.target;
    const selectedSet = new Set<string>(value.split(","));
    if (name === "services") {
      setSelectedValues(selectedSet);
    } else if (name === "stylists") {
      setSelectedMember(selectedSet);
    }
  };

  useEffect(() => {
    if (!state.errors) {
      formRef?.current?.reset();
      setSelectedValues(new Set([]));
    }
  }, [state.errors]);
  return (
    <div className="z-10 flex flex-col items-center justify-center max-w-6xl w-full gap-8 custm-pad lg:p-0">
      <div className="flex flex-col gap-8 w-full">
        <Card shadow="sm" className="w-full p-10">
          <CardBody className="overflow-visible p-0">
            <form
              action={formAction}
              ref={formRef}
              className="flex flex-col gap-10"
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
              <div className="sm:flex-row sm:max-w-full flex flex-col gap-10 max-w-full">
                <div className="w-full">
                  <Select
                    label="Services"
                    variant="bordered"
                    selectionMode="multiple"
                    placeholder="Select a service"
                    className="max-w-md"
                    selectedKeys={selectedValues}
                    onChange={handleSelectionChange}
                    name="services"
                  >
                    {services.map((service) => (
                      <SelectItem
                        key={service.name}
                        value={service.name}
                        className="text-slate-200"
                      >
                        {service.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <div aria-live="polite" aria-atomic="true">
                    {state.errors?.services &&
                      state.errors.services.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="w-full">
                  <Select
                    items={team}
                    label="Stylists"
                    variant="bordered"
                    selectionMode="single"
                    placeholder="Select a stylist"
                    className="max-w-xs w-full"
                    selectedKeys={selectedMember}
                    onChange={handleSelectionChange}
                    name="stylists"
                    classNames={{
                      label: "group-data-[filled=true]:-translate-y-5",
                      base: "max-w-xs",
                      trigger: "min-h-16 py-2",
                    }}
                    renderValue={(items) => {
                      return items.map((item) => (
                        <div key={item.key} className="flex items-center gap-2">
                          <Avatar
                            alt={item.data?.name}
                            className="flex-shrink-0"
                            size="sm"
                            src={item.data?.image_url}
                          />
                          <span>{item.data?.name}</span>
                        </div>
                      ));
                    }}
                  >
                    {(user) => (
                      <SelectItem
                        key={user.name}
                        textValue={user.name}
                        value={user.name}
                      >
                        <div className="flex gap-2 items-center">
                          <Avatar
                            alt={user.name}
                            className="flex-shrink-0"
                            size="sm"
                            src={user.image_url}
                          />
                          <span className="text-small text-slate-200">
                            {user.name}
                          </span>
                        </div>
                      </SelectItem>
                    )}
                  </Select>
                  <div aria-live="polite" aria-atomic="true">
                    {state.errors?.services &&
                      state.errors.services.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="w-full">
                  <DatePicker
                    className="max-w-md"
                    granularity="second"
                    label="Date and time"
                    name="datetime"
                    hideTimeZone
                    value={date}
                    onChange={setDate}
                  />
                  <div aria-live="polite" aria-atomic="true">
                    {state.errors?.dateTime &&
                      state.errors.dateTime.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                          {error}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              <Textarea
                variant="flat"
                label="Additional request"
                placeholder="Enter your request"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                name="message"
              />
              <Button
                radius="lg"
                color="danger"
                className="p-10 text-xl"
                type="submit"
                aria-disabled={pending}
              >
                {pending ? "Booking..." : "Book"}
              </Button>
              <div aria-live="polite" aria-atomic="true">
                <p className= {`${!state.errors ? "mt-2 text-md text-slate-200": "mt-2 text-md text-red-500"}`}>{state.message}</p>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BookingForm;
