import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addUser } from "./userSlice.js";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import {
  Button,
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export const valSchema = Yup.object({
  username: Yup.string().min(5).max(200).required(),
  email: Yup.string().email().required(),
  habits: Yup.array().min(1).required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  bio: Yup.string().min(5).max(500).required(),
});

export default function UserAddForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className="p-5">
      <Formik
        initialValues={{
          username: "",
          email: "",
          habits: [],
          gender: "",
          country: "",
          bio: "",
        }}
        onSubmit={(val) => {
          dispatch(addUser({ ...val, id: nanoid() }));
          // nav(-1);
          // console.log(val);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className="max-w-[400px] space-y-4">
            <div>
              <Input onChange={handleChange} label="Username" name="username" />
            </div>
            <div>
              <Input
                onChange={handleChange}
                label="Email"
                name="email"
                type="email"
              />
            </div>
            <div>
              <Typography>Select Your habits</Typography>
              <Checkbox
                onChange={handleChange}
                label="Dance"
                value={"dance"}
                name="habits"
              />
              <Checkbox
                onChange={handleChange}
                label="Sing"
                value={"sing"}
                name="habits"
              />
            </div>
            <div>
              <Typography>Select your gender</Typography>
              <Radio
                onChange={handleChange}
                label="Male"
                value={"male"}
                name="gender"
              />
              <Radio
                onChange={handleChange}
                label="Female"
                value={"female"}
                name="gender"
              />
            </div>
            <div>
              <Typography>Select your country</Typography>
              <Select label="select country" name="country">
                <Option value="nepal">Nepal</Option>
                <Option value="india">India</Option>
                <Option value="china">china</Option>
              </Select>
            </div>
            <div>
              <Textarea
                label="Bio"
                name="bio"
                onChange={handleChange}
              ></Textarea>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
