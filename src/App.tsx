import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import { Layout, Logo, Link } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const updateCounter = useCallback(() => setCount((count) => count + 1), []);

  return (
    <Layout>
      <Logo />
      <p>Hello Vite + react + MUI (Material-UI v5)!</p>
      <p>
        <Button variant="contained" onClick={updateCounter}>
          count is: {count}
        </Button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <Link href="https://reactjs.org">Learn React</Link>
        {" | "}
        <Link href="https://mui.com">Learn MUI</Link>
        {" | "}
        <Link href="https://vitejs.dev/guide/features.html">Vite Docs</Link>
      </p>
    </Layout>
  );
}

export default App;
