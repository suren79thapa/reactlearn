import React from "react";

export function Person() {
  const persondetail = {
    name: "kapil",
    age: 32,
  };
  return (
    <div>
      <h1>
        hello my name is {persondetail.name} and i am {persondetail.age} years
        old.
      </h1>
    </div>
  );
}
