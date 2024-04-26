import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "@mui/material";
import { BezierCurveEditor } from "react-bezier-curve-editor";

const Counter = ({ setCountForAnimation, setBgColr }) => {
  const [count, setCount] = useState(0);
  const [{ backgroundColor }, setBackground] = useSpring(() => ({
    backgroundColor: "lightgrey",
    config: { duration: 5000, easing: (t) => t * t },
  }));

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
      setCountForAnimation(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setCountForAnimation(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
    setCountForAnimation(0);
    setBgColr({ backgroundColor: "black" });
    setBackground({ backgroundColor: "black" });
  };

  setBackground({ backgroundColor: `rgb(${count * 10}, 0, 0)` });
  setBgColr({ backgroundColor: `rgb(${count * 10}, 0, 0)` });

  const [controlPoints, setControlPoints] = useState([
    { x: 0, y: 0 },
    { x: 50, y: 30 },
    { x: 150, y: 100 },
    { x: 250, y: 50 },
    { x: 350, y: 80 },
  ]);

  const updateGraph = (newControlPoints) => {
    console.log("New Control Points:", newControlPoints);
    setControlPoints(newControlPoints);
  };

  return (
    <div>
      <h6>Counter</h6>
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          overflow: "hidden",
        }}
      ></div>
      <Button
        style={{ margin: "10px" }}
        onClick={increment}
        variant="contained"
        color="primary"
      >
        Increment
      </Button>
      <Button
        style={{ margin: "10px" }}
        onClick={decrement}
        variant="contained"
        color="secondary"
      >
        Decrement
      </Button>
      <Button style={{ margin: "10px" }} onClick={reset} variant="contained">
        Reset
      </Button>
    </div>
  );
};

export default Counter;
