import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./userSlice";

export default function UserList() {
  const { users } = useSelector((state) => state.userSlice);
  // the above code is asking for user information from the redux store
  const dispatch = useDispatch();
  console.log(users);
  return (
    <div className="p-5">
      <Button
        onClick={() => dispatch(addUser(Math.floor(Math.random() * 100 + 1)))}
      >
        Add Number
      </Button>

      {users.map((user, i) => {
        return <h1 key={i}>{user}</h1>;
      })}
    </div>
  );
}
