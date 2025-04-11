"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col content-center items-center border-2 border-red-500">
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
