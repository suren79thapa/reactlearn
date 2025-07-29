import React from "react";

export default function User({ pers }) {
  console.log(pers.address);
  console.log(pers.phone);
  return (
    <div>
      <h1>User Component</h1>
      {/* <h1>Name:{props.name}</h1>
      <h1>Name:{props.age}</h1> */}
      {/* <h1>name:{namo}</h1>
      <h1>age:{umer}</h1> */}
      <h1>{pers.address}</h1>
      <h1>{pers.phone}</h1>
    </div>
  );
}
