import React from "react";
import { useGetCocktailCategoryQuery } from "./cocktailApi";
import { Card, List, ListItem } from "@material-tailwind/react";
import { useNavigate } from "react-router";

export default function CategoryCotailList() {
  const { isLoading, error, data } = useGetCocktailCategoryQuery();
  const nav = useNavigate();
  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1 className="text-pink-600">{error}</h1>;
  return (
    <div className="p-5">
      {data &&
        data.drinks.map((drink, i) => (
          <Card
            key={i}
            onClick={() => nav(`/cocktailcat/${drink.strIngredient1}`)}
            className="w-96 mb-5 border-black"
          >
            <List>
              <ListItem>{drink.strIngredient1}</ListItem>
            </List>
          </Card>
        ))}
    </div>
  );
}
