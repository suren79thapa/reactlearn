import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";

export default function SearchInput({ isHome, setSearchParams }) {
  const nav = useNavigate();
  return (
    <div className="p-5">
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(val, { resetForm }) => {
          if (isHome) {
            nav(`movie-search?search=${val.search}`);
          } else {
            setSearchParams({ search: val.search });
          }
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="max-w-[400px] flex gap-2">
            <div className="grow-1">
              <Input
                onChange={handleChange}
                name="search"
                label="movie-search"
                value={values.search}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
