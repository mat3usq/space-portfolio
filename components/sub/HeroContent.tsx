'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-row items-center justify-center px-20 mt-32 w-full z-[20]">
			<div className="h-full w-full flex flex-col gap-5 justify-start m-auto text-start">
				<motion.div
					variants={slideInFromTop}
					className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]">
					<CodeBracketIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
					<h1 className="Welcome-text text-[13px]">Backend Java Developer Portfolio</h1>
				</motion.div>

				<motion.div
					variants={slideInFromLeft(0.5)}
					className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto">
					<span>
						Crafting{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
							{' '}
							Reliable{' '}
						</span>{' '}
						Backends,
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-fuchsia-500">
							{' '}
							Enhancing{' '}
						</span>
						Interfaces and Solutions
					</span>
				</motion.div>

				<motion.p variants={slideInFromLeft(0.8)} className=" text-gray-400 my-5 max-w-[600px]">
					I&apos;m a As a Backend Java Developer, I specialize in crafting secure, scalable, and efficient systems. My
					experience spans across website, mobile, and software development, ensuring seamless integration from the
					backend to the user interface. With a solid understanding of frontend technologies, I create cohesive and
					high-performing solutions that elevate the entire user experience. Check out my projects to see the full range
					of my skills in action.
				</motion.p>

				<motion.a
					variants={slideInFromLeft(1)}
					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
					Find Out More
				</motion.a>
			</div>

			<motion.div
				variants={slideInFromRight(0.8)}
				className="w-full h-full flex flex-wrap justify-center items-center gap-16">
				<Image src="/computer.svg" alt="work icons" height={120} width={120} />
				<Image src="/code.svg" alt="work icons" height={100} width={100} />
				<Image src="/manProgramming.svg" alt="work icons" height={120} width={120} />
				<Image src="/cloud.svg" alt="work icons" height={120} width={120} />
				<Image src="/user.svg" alt="work icons" height={120} width={120} />
				<Image src="/manThinking.svg" alt="work icons" height={100} width={100} />
			</motion.div>
		</motion.div>
	)
}

export default HeroContent
