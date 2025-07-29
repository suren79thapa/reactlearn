import { Button } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, decrementValue, resetValue } from "../counterSlice";
import { useNavigate } from "react-router";

export default function CounterList() {
  const nav = useNavigate();
  const { value } = useSelector((state) => state.countSlice);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div className="p-5">
      <Button onClick={() => dispatch(addValue())}>Increment</Button>
      <Button onClick={() => dispatch(decrementValue())}>Decrement</Button>
      <Button onClick={() => dispatch(resetValue(7))}>reset</Button>
      <Button onClick={() => nav("/counter-check")}>navigation</Button>

      <h1>{value}</h1>
    </div>
  );
}
