import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div>
        <div className="text-red-500"> Hello world</div>
        <Button>Hello world</Button>
      </div>
    </>
  );
}

export default App;
