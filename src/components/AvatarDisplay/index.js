import { PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import avatar from '../../assets/img/avatar.glb'

function Model(props) {
  const { scene } = useGLTF(avatar)
  return <primitive object={scene} {...props} />
}

const AvatarDisplay = () => {

  // Couldnt figure out why the avatar is scaling too large on initial render T-T. Hope to get the answer by joining you ; )
  useEffect(()=> {
    setTimeout(()=> {
      alert(`If the avatar is too large or if there are any mistakes. It is requested to refresh the page. T-T`)  
    }, 1000)
  }, [])
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute', background: '#000' }}>
      <Suspense fallback={null}>
        <color attach={'background'} args={['#101010']} />
        <PresentationControls>
          <Stage environment={'dawn'}>
            <Model scale={0.5} />
          </Stage>
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}

export default AvatarDisplay