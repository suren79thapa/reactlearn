import React from "react";
import { useSelector } from "react-redux";

export default function CountCheck() {
  const { value } = useSelector((state) => state.countSlice);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}
