import React from "react";

export default function Student({ name = "user" }) {
  return (
    <div>
      <hr />
      <h1>Name:{name}</h1>
      <hr />
    </div>
  );
}
