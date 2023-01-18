import { PresentationControls, Stage} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from '../Model'

// function Model(props) {
//   const { scene } = useGLTF(avatar)
//   return <primitive object={scene} {...props} />
// }

const AvatarDisplay = () => {

  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute', background: '#000', width: '100%', height: '100%' }}>
        <color attach={'background'} args={['#101010']} />
        <PresentationControls>
          <Stage environment={'dawn'}>
            <Model scale={0.5} />
          </Stage>
        </PresentationControls>
    </Canvas>
  )
}

export default AvatarDisplay