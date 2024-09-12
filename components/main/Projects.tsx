import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
	return (
		<div className="flex flex-col items-center justify-center mb-10">
			<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
				Early Projects
			</h1>
			<div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
				<ProjectCard
					src="/firstProject.png"
					title="First project museum."
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt molestiae laudantium officiis nulla fugit accusamus assumenda. Pariatur nam consequatur cumque omnis itaque esse nemo dicta in tempora, quaerat a?"
				/>
				<ProjectCard
					src="/secondProject.png"
					title="Second project airport."
					description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam consectetur fugiat facere exercitationem amet eius deleniti a reiciendis adipisci!"
				/>
				<ProjectCard
					src="/thirdProject.png"
					title="Third Project battleShips."
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio harum ipsa eos nam at vero hic vel eaque repudiandae fugit labore consequuntur odit beatae repellendus, molestias voluptas suscipit alias amet."
				/>
			</div>
		</div>
	)
}

export default Projects
