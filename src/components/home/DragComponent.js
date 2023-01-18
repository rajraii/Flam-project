import React, { Suspense } from "react";
import "../../app.css";
import Draggable from "react-draggable";
import { Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import Model from "../Model";

const DragComponent = () => {
  const navigate = useNavigate();
  function onNavigate() {
    let text = `Please confirm if you want to be navigated to avatar standalone page`;
    if (window.confirm(text) === true) navigate(`/avatar`);
  }
  return (
    <Draggable bounds="parent">
      <div className="box">
        <Canvas
          style={{ background: "#171717", borderRadius: `20px` }}
          onClick={onNavigate}
        >
          <Suspense fallback={null}>
            <Stage environment={"sunset"}>
              <Model scale={1.5} />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
    </Draggable>
  );
};

export default DragComponent;
