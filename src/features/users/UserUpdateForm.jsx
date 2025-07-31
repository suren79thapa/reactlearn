import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addUser, updateUser } from "./userSlice.js";
import { useNavigate, useParams } from "react-router";
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

export default function UserUpdateForm() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  const { id } = useParams();
  const currentUser = users.find((u) => u.id === id);
  console.log(currentUser);
  return (
    <div>
      <div className="p-5">
        <Formik
          initialValues={{
            username: currentUser.username,
            email: currentUser.email,
            habits: currentUser.habits,
            gender: currentUser.gender,
            country: currentUser.country,
            bio: currentUser.bio,
          }}
          enableReinitialize={true}
          onSubmit={(val) => {
            dispatch(updateUser({ ...val, id: id }));
            nav(-1);
            // console.log(val);
          }}
          validationSchema={valSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="max-w-[400px] space-y-4">
              <div>
                <Input
                  onChange={handleChange}
                  label="Username"
                  name="username"
                  value={values.username}
                />
                {errors.username && touched.username && (
                  <h1 className="text-pink-700">{errors.username}</h1>
                )}
              </div>
              <div>
                <Input
                  onChange={handleChange}
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <h1 className="text-pink-700">{errors.email}</h1>
                )}
              </div>
              <div>
                <Typography>Select Your habits</Typography>
                <Checkbox
                  onChange={handleChange}
                  label="Dance"
                  value={"dance"}
                  name="habits"
                  checked={values.habits.includes("dance")}
                />
                <Checkbox
                  onChange={handleChange}
                  label="Sing"
                  value={"sing"}
                  name="habits"
                  checked={values.habits.includes("sing")}
                />
                {errors.habits && touched.habits && (
                  <h1 className="text-pink-700">{errors.habits}</h1>
                )}
              </div>
              <div>
                <Typography>Select your gender</Typography>
                <Radio
                  onChange={handleChange}
                  label="Male"
                  value={"male"}
                  name="gender"
                  checked={values.gender === "male"}
                />
                <Radio
                  onChange={handleChange}
                  label="Female"
                  value={"female"}
                  name="gender"
                  checked={values.gender === "female"}
                />
                {errors.gender && touched.gender && (
                  <h1 className="text-pink-700">{errors.gender}</h1>
                )}
              </div>
              <div>
                <Typography>Select your country</Typography>
                <Select
                  label="select country"
                  name="country"
                  value={values.country}
                  onChange={(e) => {
                    setFieldValue("country", e);
                  }}
                >
                  <Option value="nepal">Nepal</Option>
                  <Option value="india">India</Option>
                  <Option value="china">china</Option>
                </Select>
                {errors.country && touched.country && (
                  <h1 className="text-pink-700">{errors.country}</h1>
                )}
              </div>
              <div>
                <Textarea
                  label="Bio"
                  name="bio"
                  onChange={handleChange}
                  value={values.bio}
                />
                {errors.bio && touched.bio && (
                  <h1 className="text-pink-700">{errors.bio}</h1>
                )}
              </div>
              <Button type="submit">Submit</Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
