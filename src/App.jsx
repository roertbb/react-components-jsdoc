// @ts-check

import { useState } from "react";
import { Button } from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <Button variant="primary" onClick={() => setCount((value) => value + 1)}>
        Increase
      </Button>
      <Button variant="asdf">Wrong variant type</Button>
    </>
  );
}

export default App;
