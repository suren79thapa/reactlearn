import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Button } from "@material-tailwind/react";
import { addUser } from "./userSlice";

export default function UserList() {
  const { users } = useSelector((state) => state.userSlice);

  return (
    <div className="p-5">
      <h1>hello jee</h1>
    </div>
  );
}
