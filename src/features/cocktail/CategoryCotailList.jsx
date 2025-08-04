import React from "react";
import { useGetCocktailCategoryQuery } from "./cocktailApi";
import { Card, List, ListItem } from "@material-tailwind/react";

export default function CategoryCotailList() {
  const { isLoading, error, data } = useGetCocktailCategoryQuery();
  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1 className="text-pink-600">{error}</h1>;
  return (
    <div>
      {data &&
        data.drinks.map((drink, i) => {
          return;
          <Card key={i} className="w-96">
            <List>
              <ListItem>{drink.strIngredient1}</ListItem>
            </List>
          </Card>;
        })}
    </div>
  );
}
