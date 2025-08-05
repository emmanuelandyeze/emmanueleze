import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import profilePc from '../../public/images/profile/dev1.png';
import Link from 'next/link';

const skills = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'React Native',
	'Node.js',
	'Express.js',
	'Python',
	'Tailwind CSS',
	'MongoDB',
	'Firebase',
	'Git',
	'GitHub',
	'Docker',
	'AWS',
	'Vercel',
];

const About = () => {
	return (
		<>
			<Head>
				<title>About Me | Emmanuel Andy Eze</title>
				<meta
					name="description"
					content="Full Stack Developer | Mobile App Developer | Web Developer."
				/>
			</Head>
			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<AnimatedText
						text={
							'Your Vision. My Expertise. Success Unleashed.'
						}
						className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
					/>

					<div className="grid w-full grid-cols-2 gap-16 lg:flex lg:flex-col lg:gap-8">
						{/* Profile Picture Section */}
						<div className="col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 md:col-span-2">
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePc}
								alt="Emmanuel Eze"
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>

						{/* About Me Section */}
						<div className="col-span-1 flex flex-col items-start justify-start md:col-span-2">
							<h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
								About Me
							</h2>
							<p className="font-medium text-lg md:text-base">
								Hi there! I am Emmanuel Andy Eze, a
								passionate full-stack developer specializing
								in crafting dynamic and innovative websites
								and mobile applications. With a focus on
								React, Next.js, React Native, and Node.js, I
								bring creativity and technical expertise
								together to build seamless digital
								experiences. I thrive on turning ideas into
								reality and love diving into the intricacies
								of code to create user-friendly,
								high-performance solutions.
							</p>
							<p className="font-medium mt-4 text-lg md:text-base">
								Whether it&apos;s bringing a stunning design
								to life or optimizing functionality, I am
								dedicated to delivering top-notch results
								that exceed expectations. Explore my
								showcased projects below and see how I have
								tackled challenges, leveraged cutting-edge
								technologies, and brought visions to life.
								Feel free to reach out, I am always up for a
								new coding adventure or collaboration!
							</p>
							<p className="font-medium mt-4 text-lg md:text-base">
								Let&apos;s build something amazing together.
							</p>

							<div className="flex flex-row justify-between items-center mt-10 w-full sm:flex-wrap">
								<div className="flex flex-col items-center justify-center mx-auto sm:mb-4">
									<span className="inline-block text-7xl sm:text-4xl font-bold">
										10+
									</span>
									<h2 className="text-xl font-medium capitalize sm:text-base text-dark/75 dark:text-light/75">
										projects completed
									</h2>
								</div>
								<div className="flex flex-col items-center justify-center mx-auto sm:mb-4">
									<span className="inline-block text-7xl sm:text-4xl font-bold">
										10+
									</span>
									<h2 className="text-xl font-medium capitalize sm:text-base text-dark/75 dark:text-light/75">
										satisfied clients
									</h2>
								</div>
								<div className="flex flex-col items-center justify-center mx-auto sm:mb-4">
									<span className="inline-block text-7xl sm:text-4xl font-bold">
										6+
									</span>
									<h2 className="text-xl font-medium capitalize sm:text-base text-dark/75 dark:text-light/75">
										years of experience
									</h2>
								</div>
							</div>

							<Link
								href={'https://wa.me/2349165095973'}
								target="_blank"
								className="mt-8 flex items-center self-center md:self-start bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-2 md:p-2 md:px-4 md:text-base"
							>
								Hire me
							</Link>
						</div>

						{/* Skills Section */}
						<div className="col-span-2 mt-16 md:col-span-2">
							<h2 className="text-4xl font-bold text-center mb-8 sm:text-3xl">
								Skills & Technologies
							</h2>
							<div className="grid grid-cols-4 gap-6 text-center md:grid-cols-3 sm:grid-cols-2">
								{skills.map((skill) => (
									<div
										key={skill}
										className="bg-light dark:bg-dark text-dark dark:text-light border-2 border-solid border-dark dark:border-light rounded-lg p-4 font-semibold text-lg md:text-base"
									>
										{skill}
									</div>
								))}
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default About;
