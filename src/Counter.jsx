import React, { useState } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {}, []);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default Counter;
