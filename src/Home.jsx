import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react";

function Home() {
  // now i will be learning about the formik here
  const [data, setData] = useState([]);
  return (
    <div className="p-5">
      <Formik
        initialValues={{ title: "", email: "" }}
        onSubmit={(val, { resetForm }) => {
          // console.log(" Submitted values:", val);
          setData((prev) => [...prev, val]);
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => {
          // console.log(" Live form values:", values);
          return (
            <form onSubmit={handleSubmit} className="max-w-[300px] space-y-4">
              <div className="flex gap-4 ">
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
              <Button type="submit">Submit</Button>
            </form>
          );
        }}
      </Formik>
      {data.map((d, i) => {
        return (
          <h1 key={i}>
            Name:{d.title} <br />
            Email:{d.email}
          </h1>
        );
      })}
    </div>
  );
}

export default Home;
