import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../background/redux/slices/projectSlice";
import { Button } from "@chakra-ui/react";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </div>
    </section>
  );
};
