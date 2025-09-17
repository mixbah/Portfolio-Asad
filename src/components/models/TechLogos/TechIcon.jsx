import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { Environment } from '@react-three/drei';
import { Float } from '@react-three/drei';
import { Group } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";

const TechIcon = ({model}) => {
    const scene=useGLTF(model.modelPath);

    useEffect(() => {
      if (model.name === "Interactive Developer") {
        scene.scene.traverse((child) => {
          if (child.isMesh) {
            if (child.name === "Object_5") {
              child.material = new THREE.MeshStandardMaterial({ color: "grey" })
            }
          }
        });
      }
    }, [scene])
  
  return (
    <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight positon={[5,5,5]} intensity={1} />
      <Environment preset='city'/>
      <OrbitControls enableZoom={false}/>
      <Float speed={5.5} rotationIntensity={0.8} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene}/>
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon