import React from "react";
import { useRemoveArticleMutation } from "./articleApi";
import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";

export default function RemoveArticle({ id }) {
  const [removeArticle, { isLoading }] = useRemoveArticleMutation();
  const handleRemove = async () => {
    try {
      await removeArticle(id).unwrap();
      toast.success("removed successully");
    } catch (err) {
      toast.error(`${err.data}`);
    }
  };
  return (
    <div>
      <Button onClick={handleRemove} Loading={isLoading}>
        <i className="fas fa-trash" />
      </Button>
    </div>
  );
}
