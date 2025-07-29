import { Button, input, Input } from "@material-tailwind/react";

import React, { useRef } from "react";
import { useNavigate } from "react-router";

function Home() {
  const secRef = useRef();

  const scrollToSec = () => {
    secRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="p-5 space-y-5">
        <Button onClick={scrollToSec}>section 2</Button>
      </div>
    </div>
  );
}

export default Home;
