import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { addUser } from "./userSlice";

export default function UserList() {
  const { users } = useSelector((state) => state.userSlice);
  console.log(users);
  return (
    <div className="p-5 grid grid-cols-2">
      {users.map((user, index) => {
        return (
          <div key={user.id}>
            <div>
              <Typography>{user.username}</Typography>
            </div>
            <div>
              <p>{user.email}</p>
            </div>
            <div>
              <p>{user.country}</p>
            </div>
            <div>
              <p>{user.gender}</p>
            </div>
            <div>
              {user.habits.map((habit, i) => {
                return <p key={i}>{habit}</p>;
              })}
            </div>
            <Typography color="brown">{user.bio}</Typography>
          </div>
        );
      })}
    </div>
  );
}
