import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, setValue } from "../store/actions/counterActions";
import type { RootState } from "../store/store";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [customValue, setCustomValue] = useState("");

  return (
    <div className={styles.counterContainer}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input
        type="number"
        value={customValue}
        onChange={(event) => setCustomValue(event.target.value)}
        aria-label="Custom counter value"
      />
      <button
        onClick={() => dispatch(setValue(Number(customValue)))}
        disabled={customValue === ""}
      >
        Set
      </button>
    </div>
  );
};

export default Counter;