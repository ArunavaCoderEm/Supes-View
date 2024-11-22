import React from "react";
import Pages from "./Pages";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App(): React.ReactNode {
  return (
    <>
      <Pages />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
