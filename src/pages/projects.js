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
		<article className="w-full flex items-center justify-between p-12 rounded-3xl border-solid border-dark bg-light shadow-2xl">
			<Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
				<Image
					width={500}
					height={900}
					src={img}
					alt={title}
					className="w-full h-auto"
				/>
			</Link>
			<div className='w-1/2 flex flex-col items-start justify-between pl-6'>
				<span className='text-primary font-medium text-xl'>{type}</span>
				<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
				</Link>
				<p className='my-2 font-medium text-dark'>{summary}</p>
				<div className='mt-2 flex items-center'>
					<Link href={github} target="_blank" className='w-10'>
						<GithubIcon />
					</Link>
					<Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
						Visit Project
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
					<AnimatedText text={'Projects'} />

					<div className="grid grid-cols-12 gap-24 pt-16">
						<div className="col-span-12">
							<FeaturedProject
								title={'Legacy Atelier'}
								type={'Web Application'}
								summary={
									'An e-commerce web app for a local arts and crafts shop. Built using Next.js, Tailwind CSS and Shopify.'
								}
								img={'/images/projects/legacy-atelier.png'}
								link={'https://www.legacyatelier.com.ng/'}
								github={
									'https://github.com/emmanuelandyeze/ekoatelier'
								}
							/>
						</div>
						<div className="col-span-6">Project 1</div>
						<div className="col-span-6">Project 2</div>
						<div className="col-span-12">
							Featured Projects
						</div>
						<div className="col-span-6">Project 3</div>
						<div className="col-span-6">Project 4</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
