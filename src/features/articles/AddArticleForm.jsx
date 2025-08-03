import { Formik } from "formik";
import { useCreateArticleMutation } from "./articleApi";
import { Button, Input, Textarea } from "@material-tailwind/react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const valSchema = Yup.object({
  title: Yup.string().required(),
  detail: Yup.string().required(),
  image: Yup.string().url().required(),
});

export default function AddArticleForm() {
  const [addArticle, { isLoading }] = useCreateArticleMutation();
  const nav = useNavigate();
  return (
    <div className="p-5">
      <Formik
        initialValues={{ title: "", detail: "", image: "" }}
        onSubmit={async (val) => {
          try {
            await addArticle(val).unwrap();
            toast.success("added successfuly");
            nav(-1);
          } catch (err) {
            toast.error(err.data);
          }
        }}
        validationSchema={valSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className="max-w-[400px] space-y-4">
            <div>
              <Input onChange={handleChange} name="title" label="Title" />
              {errors.title && touched.title && (
                <h1 className="text-pink-500">{errors.title}</h1>
              )}
            </div>
            <div>
              <Textarea
                name="detail"
                onChange={handleChange}
                label="Detail"
              ></Textarea>
              {errors.detail && touched.detail && (
                <h1 className="text-pink-500">{errors.detail}</h1>
              )}
            </div>
            <div>
              <Input name="image" onChange={handleChange} label="Image Url" />
              {errors.image && touched.image && (
                <h1 className="text-pink-500">{errors.image}</h1>
              )}
            </div>
            <Button loading={isLoading} type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
