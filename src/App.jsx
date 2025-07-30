import React, { useState } from "react";
import User from "./stepbystepcode/User";
import Student from "./stepbystepcode/Student";
import { Button } from "@material-tailwind/react";

export default function App() {
  // const name = "hari";
  // now i will be passing the object and lets see
  const userObject1 = {
    locality: "kathmancu",
    phone: "nt",
    age: 67,
  };
  const userObject2 = {
    locality: "pokara",
    phone: "ncel",
    age: 45,
  };
  const userObject3 = {
    locality: "chitwan",
    phone: "gio",
    age: 90,
  };
  // const arr = [45, 67, 89, 34];
  // aba euta state variable banauchu
  const [data, setData] = useState("");
  return (
    <div>
      <h1>We are learning props</h1>
      {/* <User user1={userObject1} user2={userObject2} user3={userObject3} />  */}
      {/* the above thing is like doing something manually */}
      <User user={userObject1} />
      <User user={userObject2} />
      <User user={userObject3} />
      <Button onClick={() => setData("bhaskar")}>change_name</Button>
      {data && <Student name={data} />}
    </div>
  );
}
