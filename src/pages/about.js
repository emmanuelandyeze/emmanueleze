import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import profilePc from '../../public/images/profile/dev1.png';
import Link from 'next/link';
const about = () => {
	return (
		<>
			<Head>
				<title>About Me | Emmanuel Andy Eze</title>
				<meta
					name="description"
					content="Full Stack Developer | Mobile App Developer | Web Developer."
				/>
			</Head>
			<main className="flex w-full flex-col items-center justify-center">
				<Layout className="pt-10">
					<AnimatedText
						text={
							'Your Vision. My Expertise. Success Unleashed.'
						}
						className="mb-16 !text-6xl lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
					/>
					<div className="grid w-full grid-cols-6 gap-16 lg:flex lg:flex-col sm:justify-center">
						<div className="col-span-3 relative sm:hidden md:hidden   rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8">
							<div className="absolute top-0 -right-3 -z-10 2-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePc}
								alt=""
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							/>
						</div>
						<div className="col-span-3 flex flex-col md:w-full lg:w-full items-start justify-start sm:justify-center sm:items-center dark:text-light">
							<div>
								{/* <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
									About Us
								</h2> */}
								<p>
									Hi there! I am Emmanuel Andy Eze, a
									passionate full-stack developer
									specializing in crafting dynamic and
									innovative websites and mobile
									applications. With a focus on React,
									Next.js, React Native, and Node.js, I
									bring creativity and technical expertise
									together to build seamless digital
									experiences. I thrive on turning ideas
									into reality and love diving into the
									intricacies of code to create
									user-friendly, high-performance solutions.
								</p>
								<br />
								<p>
									Whether it is bringing a stunning design to
									life or optimizing functionality, I am
									dedicated to delivering top-notch results
									that exceed expectations. Explore my
									showcased projects below and see how I have
									tackled challenges, leveraged cutting-edge
									technologies, and brought visions to life.
									Feel free to reach out, I am always up for a
									new coding adventure or collaboration!
									Let us build something amazing together.
								</p>
								<br />

								<br />
								<p>
									Let me be your trusted partner on this
									transformative journey.
								</p>
								<div className="flex flex-row justify-between mt-10 dark:text-light">
									<div className="flex flex-col items-center justify-center">
										<span className="inline-block text-7xl sm:text-3xl font-bold">
											10+
										</span>
										<h2 className="text-xl font-medium capitalize sm:text-base sm:text-center text-dark/75 dark:text-light/75">
											projects completed
										</h2>
									</div>
									<div className="flex flex-col items-center justify-center">
										<span className="inline-block text-7xl sm:text-3xl font-bold">
											10+
										</span>
										<h2 className="text-xl font-medium capitalize sm:text-base sm:text-center text-dark/75 dark:text-light/75">
											satisfied clients
										</h2>
									</div>
									<div className="flex flex-col items-center justify-center">
										<span className="inline-block text-7xl sm:text-3xl font-bold">
											4+
										</span>
										<h2 className="text-xl font-medium capitalize sm:text-base sm:text-center text-dark/75 dark:text-light/75">
											years of experience
										</h2>
									</div>
								</div>
								<div className="flex sm:mx-auto items-center pt-8 self-center mt-2 lg:self-center sm:self-center">
									<Link
										href={'/hire'}
										className="flex items-center bg-dark text-light md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-2"
									>
										Hire
									</Link>
									<Link
										href={'/projects'}
										className="flex items-center bg-light text-dark md:p-2 md:px-4 md:text-base dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-light"
									>
										View Projects
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default about;
