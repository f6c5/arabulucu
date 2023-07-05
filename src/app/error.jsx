"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Bir şeyler yanlış gitti!</h2>
      <button onClick={() => reset()}>Tekrar dene</button>
    </div>
  );
};

export default Error;
