import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function CategoryList() {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [load, setLoad] = useState(false);
  const nav = useNavigate();
  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setErr(err.message);
      setLoad(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (load) return <h1>Loading...</h1>;
  if (err) return <h1>Error: {err}</h1>;
  return (
    <div className="p-5 grid grid-cols-4 gap-5">
      {data &&
        data.categories.map((category) => {
          return (
            <Card className="mt-6 ">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  className="w-full"
                  src={category.strCategoryThumb}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {category.strCategory}
                </Typography>
                <p className="line-clamp-4">
                  {category.strCategoryDescription}
                </p>
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={() => nav(`/meal-list?c=${category.strCategory}`)}>Read More</Button>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
}
