import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useGetCocktailsByCategoryQuery } from "./cocktailApi";
import { useParams } from "react-router";

export default function AddCocktailList() {
  const { category } = useParams();
  const { isLoading, error, data } = useGetCocktailsByCategoryQuery(category);
  // const [getArticles, { isLoading, data, error }] = useLazyGetArticlesQuery();

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>{error.data}</h1>;
  return (
    <div>
      <div className="p-5 grid grid-cols-4 gap-5">
        {data &&
          data.drinks.map((drink) => {
            return (
              <Card key={drink.idDrink} className="mt-6 ">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    className="w-full"
                    src={drink.strDrinkThumb}
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {drink.strDrink}
                  </Typography>
                </CardBody>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
