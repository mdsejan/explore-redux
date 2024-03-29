import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  //   console.log(count);
  return (
    <div className="flex gap-10">
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment By 5
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
