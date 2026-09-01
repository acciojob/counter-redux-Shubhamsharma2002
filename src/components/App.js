import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";
import './../styles/App.css';

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* 1st child: h1 element displaying current count */}
      <h1>{count}</h1>

      {/* 2nd child: Increment button */}
      <button onClick={() => dispatch(increment())}>increment</button>

      {/* 3rd child: Decrement button */}
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default App;