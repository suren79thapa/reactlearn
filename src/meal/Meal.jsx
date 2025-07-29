import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Meal() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php",
        { params: { i: id } }
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

  if (load) return <h1>Loading....</h1>;
  if (err) return <h1 className="text-pink-600">{err}</h1>;
  return (
    <div className="p-5">
      {data &&
        data.meals.map((meal) => {
          const vidId = meal.strYoutube.split("=")[1];
          return (
            <div key={meal.idMeal}>
              <div className="flex gap-5">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${vidId}`}
                ></iframe>
                <img
                  className="h-[315px] w-[420px] object-cover"
                  src={meal.strMealThumb}
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
