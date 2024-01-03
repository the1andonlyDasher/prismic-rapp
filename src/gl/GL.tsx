
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Rapp_final";
import { forwardRef } from "react";
import { r3f } from "@/helpers/global";

interface glProps {
  eventSource?: any;
}

const GL = (props: glProps) => {
  return (
    <div className="canvas__wrapper">
      <Canvas camera={{ position: [0, 2, 10] }} dpr={[1, 1.5]} gl={{ antialias: true }} eventSource={props.eventSource}>
        <color attach="background" args={["#EEE8D2"]} />
        <spotLight intensity={10} color={"red"} />
        <ambientLight intensity={0.5} />
        <Environment preset="lobby" blur={2} />
        <Model />
        <r3f.Out />
      </Canvas>
    </div>
  );
}

const WebGL = forwardRef<any, glProps>((props, ref) => (
  <GL eventSource={props.eventSource}></GL>
));
WebGL.displayName = "WebGL";

export default WebGL;