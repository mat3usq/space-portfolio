'use client'

import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import { damp3 } from 'maath/easing'

const StarBackground = (props: any) => {
	const ref = useRef<any>(null)
	const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 })

	useFrame((state, delta) => {
		if (ref.current) {
			damp3(ref.current.rotation, [ref.current.rotation.x - 0.02, ref.current.rotation.y - 0.03, 0], 0.25, delta)
		}
	})

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
				<PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
			</Points>
		</group>
	)
}

const StarsCanvas = () => (
	<div className="w-full h-auto fixed inset-0 z-[20]">
		<Canvas camera={{ position: [0, 0, 1] }}>
			<ambientLight intensity={0.2} />
			<pointLight position={[5, 5, 5]} intensity={1} />
			<Suspense fallback={null}>
				<StarBackground />
			</Suspense>
		</Canvas>
	</div>
)

export default StarsCanvas
