import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const DnaHelix = () => {
  const group = useRef<THREE.Group>(null);
  const count = 30;

  const data = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const y = (i - count / 2) * 0.4;
      const angle = i * 0.3;
      return { y, angle };
    });
  }, [count]);

  // Enable frame animation for continuous motion
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={group} position={[6, 0, -2]} rotation={[0, 0.4, 0.1]}>
      {data.map((item, i) => {
        const x1 = Math.cos(item.angle) * 2;
        const z1 = Math.sin(item.angle) * 2;
        const x2 = Math.cos(item.angle + Math.PI) * 2;
        const z2 = Math.sin(item.angle + Math.PI) * 2;

        return (
          <group key={i}>
            {/* Strands */}
            <mesh position={[x1, item.y, z1]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color="#1E40AF"
                emissive="#1E3A8A"
                emissiveIntensity={0.1}
                transparent
                opacity={0.8}
              />
            </mesh>
            <mesh position={[x2, item.y, z2]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color="#172554"
                transparent
                opacity={0.8}
              />
            </mesh>

            {/* Connecting bars */}
            <mesh position={[0, item.y, 0]} rotation={[0, 0, Math.PI / 2 + item.angle]}>
              <cylinderGeometry args={[0.01, 0.01, 4]} />
              <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

export const ThreeScene = () => {
  return (
    <div className="hero-3d" style={{ filter: 'blur(3px)' }}>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 15], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, 5, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1E3A8A" />

        <Suspense fallback={null}>
          <DnaHelix />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
