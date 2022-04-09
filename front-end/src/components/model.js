import {
  TransformControls,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function Model({ file, fileDetailsCallback }) {
  const gltf = useLoader(GLTFLoader, file);
  let vericiesNum = 0;
  gltf.scene.traverse(function (child) {
    if (child.isMesh) {
      vericiesNum += child.geometry.attributes.position.count;
    }
  });
  const box = useMemo(
    () => new THREE.Box3().setFromObject(gltf.scene),
    [gltf.scene]
  );

  const detailsObj = {};
  detailsObj.verticesNum = vericiesNum;
  detailsObj.sizeX = Math.abs(box.max.x) + Math.abs(box.min.x);
  detailsObj.sizeY = Math.abs(box.max.y) + Math.abs(box.min.y);
  detailsObj.sizeZ = Math.abs(box.max.z) + Math.abs(box.min.z);
  fileDetailsCallback(detailsObj);

  //'translate', 'rotate', 'scale'
  const [currenetMode, setCurrenetMode] = useState("translate");
  useEffect(() => {
    window.addEventListener("keypress", (e) => {

      switch (e.key) {
        case "t" || "T":
          setCurrenetMode("translate");
          break;

        case "r" || "R":
          setCurrenetMode("rotate");

          break;

        case "s" || "S":
          setCurrenetMode("scale");
          break;

        case "q" || "Q":
          setCurrenetMode("none");
          break;

        default:
          break;
      }
    });
  }, []);

  return (
    <>
      {currenetMode === "none" ? (
        <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
      ) : (
        <TransformControls mode={currenetMode}>
          <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
        </TransformControls>
      )}
    </>
  );
}
