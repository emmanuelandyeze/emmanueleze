import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProject = ({
	type,
	title,
	summary,
	img,
	link,
	github,
}) => {
	return (
		<article className="w-full flex items-center justify-between relative rounded-br-2xl p-12 rounded-3xl border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
			<div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
			<Link
				className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
				href={link}
				target="_blank"
			>
				<Image
					width={500}
					height={900}
					src={img}
					alt={title}
					className="w-full h-auto"
				/>
			</Link>
			<div className="w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6">
				<span className="text-primary font-medium text-xl xs:text-base">
					{type}
				</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full dark:text-light text-left text-4xl font-bold sm:text-sm">
						{title}
					</h2>
				</Link>
				<p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
					{summary}
				</p>
				<div className="mt-2 flex items-center">
					<Link
						href={github}
						target="_blank"
						className="w-10"
					>
						<GithubIcon />
					</Link>
					<Link
						href={link}
						target="_blank"
						className="ml-4 sm rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
					>
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({
	type,
	title,
	summary,
	img,
	link,
	github,
}) => {
	return (
		<article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
			<div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
			<Link
				className="w-full cursor-pointer overflow-hidden rounded-lg"
				href={link}
				target="_blank"
			>
				<Image
					width={500}
					height={900}
					src={img}
					alt={title}
					className="w-full h-auto"
				/>
			</Link>
			<div className="w-full flex flex-col items-start justify-between mt-4">
				<span className="text-primary font-medium text-xl lg:text-lg md:text-base">
					{type}
				</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="my-2 w-full text-left dark:text-light text-3xl font-bold lg:text-2xl">
						{title}
					</h2>
				</Link>
				<p className="my-2 font-medium text-dark dark:text-light">
					{summary}
				</p>
				<div className="mt-2 flex items-center justify-between w-full">
					<Link
						href={link}
						target="_blank"
						className="rounded-lg  text-lg dark:text-light font-semibold underline md:text-base"
					>
						Visit
					</Link>
					<Link
						href={github}
						target="_blank"
						className="w-8 md:w-6"
					>
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const projects = () => {
	return (
		<>
			<Head>
				<title>Projects | Emmanuel Andy Eze</title>
				<meta
					name="description"
					content="Full Stack Developer | Mobile App Developer | Web Developer."
				/>
			</Head>
			<main className="w-full mb-16 flex flex-col items-center justify-center">
				<Layout className="pt-16">
					<AnimatedText
						text={'Projects'}
						className="lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl mb-16"
					/>

					<div className="grid grid-cols-12 gap-20 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
						<div className="col-span-12">
							<FeaturedProject
								title={'Legacy Atelier'}
								type={'Web Application'}
								summary={
									'An e-commerce web app for a local arts and crafts shop. Built using Next.js, Tailwind CSS, Shopify and Node.js (Frontend & Backend).'
								}
								img={'/images/projects/legacyatelier.png'}
								link={'https://www.legacyatelier.com.ng/'}
								github={
									'https://github.com/emmanuelandyeze/ekoatelier'
								}
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title={'AuditMe'}
								type={'Web Application'}
								summary={
									'A Finance application to stream line financial auditing processes. Built using Next.js, Tailwind CSS and Node.js (Frontend & Backend).'
								}
								img={'/images/projects/auditme.png'}
								link={'https://auditme.com.ng/'}
								github={
									'https://github.com/emmanuelandyeze/auditme-web'
								}
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title={'Pepcode'}
								type={'Web Application'}
								summary={
									'A Finance web application that enables businesses to automate sales records, record purchases, manage inventory, handle point of sales, and access analytics. Built using Next.js, Tailwind CSS and Nest.js (Frontend & Backend).'
								}
								img={'/images/projects/pepcode.png'}
								link={'https://www.pepcodeinc.com/'}
								github={
									'https://github.com/emmanuelandyeze/pepcode-user'
								}
							/>
						</div>
						<div className="col-span-12">
							<FeaturedProject
								title={'HT Legal Advisory'}
								type={'Website'}
								summary={
									'A Law Agency Website built for HTLEGAL. Built using React.js (Next.js)'
								}
								img={'/images/projects/htlegal.png'}
								link={'https://www.htlegal.com.ng/'}
								github={
									'https://github.com/emmanuelandyeze/htlegal'
								}
							/>
						</div>
						<div className="col-span-12">
							<FeaturedProject
								title={'The Strides'}
								type={'Web Application'}
								summary={
									'A community-based social media platform to foster learning and growth. Built using Next.js, Tailwind CSS, Node.js and MongoDB (Frontend & Backend).'
								}
								img={'/images/projects/strides.png'}
								link={'https://thestrides.vercel.app/'}
								github={
									'https://github.com/emmanuelandyeze/thestrides'
								}
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title={'Campus Mate'}
								type={'Mobile Application'}
								summary={
									'Mobile app for organizing schedules, collaborating with peers, accessing study materials, and managing tasks all in one place. Built using React Native, Tailwind CSS, Node.js and MongoDB (Frontend & Backend).'
								}
								img={'/images/projects/campusmate.png'}
								link={
									'https://drive.google.com/file/d/16ZjySH1q7xHTPH9UucNil3c_SQXwPKXP/view?usp=drivesdk'
								}
								github={
									'https://github.com/emmanuelandyeze/campusmate-server'
								}
							/>
						</div>
						<div className="col-span-6 sm:col-span-12">
							<Project
								title={'Oneshop Store'}
								type={'Mobile Application'}
								summary={
									'An e-commerce mobile app for purchasing Health Supplements. Built using React Native, Tailwind CSS and Node.js.'
								}
								img={'/images/projects/oneshopstore.png'}
								link={
									'https://play.google.com/store/apps/details?id=com.oneshop_store&hl=en_US&gl=US'
								}
								github={
									'https://github.com/emmanuelandyeze/oneshop_store'
								}
							/>
						</div>

						{/* <div className="col-span-6 sm:col-span-12">
							<Project
								title={'Oneshop Vendor'}
								type={'Mobile Application'}
								summary={
									'An e-commerce mobile app for vendors of Health Supplements. Built using React Native, Tailwind CSS and MongoDB.'
								}
								img={'/images/projects/oneshopvendor.png'}
								link={
									'https://play.google.com/store/apps/details?id=com.oneshop_vendor&hl=en_US&gl=US'
								}
								github={
									'https://github.com/emmanuelandyeze/oneshop_vendor'
								}
							/>
						</div> */}
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
