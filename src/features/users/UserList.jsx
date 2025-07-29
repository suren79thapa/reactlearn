import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Button } from "@material-tailwind/react";
import { addUser } from "./userSlice";

export default function UserList() {
  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  return (
    <div className="p-5">
      <Button
        onClick={() => dispatch(addUser(Math.floor(Math.random() * 100 + 1)))}
      >
        Add value
      </Button>
      {users.map((i, k) => {
        return <h1 key={k}>{i}</h1>;
      })}
    </div>
  );
}
