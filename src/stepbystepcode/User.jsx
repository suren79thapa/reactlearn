import React from "react";

export default function User({ user }) {
  // console.log(props);
  return (
    <div>
      <hr />
      <h2>i am the user</h2>
      <h2>{user.locality}</h2>
      <h2>{user.phone}</h2>
      <h2>{user.age}</h2>
    </div>
  );
}
