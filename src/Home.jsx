import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import React, { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  return (
    <div className="p-5">
      <Formik
        initialValues={{ title: "", email: "" }}
        onSubmit={(val, { resetForm }) => {
          setData((prev) => [...prev, val]);
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="max-w-[300px]">
            <div className="flex gap-4">
              <Input
                onChange={handleChange}
                value={values.title}
                name="title"
                label="Title"
              />
              <Input
                onChange={handleChange}
                value={values.email}
                name="email"
                label="Email"
              />
            </div>
            <Button type="submit" className="mt-5">
              submit
            </Button>
          </form>
        )}
      </Formik>
      {data.map((d, i) => {
        return (
          <div>
            <h1>Name:{d.title}</h1>
            <h1>Email:{d.email}</h1>
          </div>
        );
      })}
    </div>
  );
}
