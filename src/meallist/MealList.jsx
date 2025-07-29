import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function MealList() {
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [load, setLoad] = useState(false);
  const nav = useNavigate();
  const [search, setSearch] = useSearchParams();
  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php",
        {
          params: { c: search.get("c") },
        }
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
    <div className="flex justify-start  gap-5 flex-wrap">
      {data &&
        data.meals.map((meal) => {
          return (
            <Card
              onClick={() => nav(`/meal/${meal.idMeal}`)}
              key={meal.idMeal}
              className="w-[400px] "
            >
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="candice"
                      src={meal.strMealThumb}
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {meal.strMeal}
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </Card>
          );
        })}
    </div>
  );
}
