import { Backend_skill, Frontend_skill, Other_skill } from '@/constants'
import React from 'react'
import SkillsData from '../sub/SkillsData'
import SkillsText from '../sub/SkillsText'

const Skills = () => {
	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 pt-36">
			<SkillsText />

			<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
				{Frontend_skill.map((image, index) => (
					<SkillsData key={index} src={image.Image} width={image.width} height={image.height} index={index} />
				))}
			</div>
			<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
				{Backend_skill.map((image, index) => (
					<SkillsData key={index} src={image.Image} width={image.width} height={image.height} index={index} />
				))}
			</div>
			<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
				{Other_skill.map((image, index) => (
					<SkillsData key={index} src={image.Image} width={image.width} height={image.height} index={index} />
				))}
			</div>

			<div className="w-full h-full absolute">
				<div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
					<video className="w-full h-auto" preload="false" playsInline loop muted autoPlay src="/cards-video.webm" />
				</div>
			</div>
		</section>
	)
}

export default Skills
