import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByPayload } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByPayload(5))}>
        Increment +5
      </button>
    </>
  );
}

export default Counter;
