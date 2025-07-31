import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { addUser, removeUser } from "./userSlice";
import { useNavigate } from "react-router";

export default function UserList() {
  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const nav = useNavigate();
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
            <div className="flex gap-3">
              <IconButton
                onClick={() => nav(`/update-form/${user.id}`)}
                size="sm"
                color="green"
              >
                <i className="fas fa-edit" />
              </IconButton>
              <IconButton
                onClick={() => dispatch(removeUser(index))}
                size="sm"
                color="pink"
              >
                <i className="fas fa-edit" />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
