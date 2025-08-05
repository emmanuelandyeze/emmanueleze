import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import ProfilePic from '../../public/images/mypic.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
// Import the new typing component
import AnimatedTypingText from '@/components/AnimatedTypingText';
import { Poppins } from 'next/font/google';
import profilePic from '../../public/images/mypic.png';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500'], // We'll use regular and medium weights
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Emmanuel Andy Eze</title>
				<meta
					name="description"
					content="Full Stack Developer | Mobile App Developer | Web Developer."
				/>
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout className="pt-0 md:pt-16 sm:pt-8">
					<div className="flex flex-col items-center justify-center w-full text-center">
						{/* Use the new AnimatedTypingText component here */}
						<AnimatedTypingText className="!text-8xl !leading-tight xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl" />

						<p
							className={` py-8 text-xl font-medium sm:text-lg md:text-xl xl:text-2xl max-w-3xl leading-relaxed`}
						>
							Full Stack Software Engineer (Web & Mobile).
						</p>

						<div className="flex items-center mt-4">
							<Link
								href={'/about'}
								className="flex items-center bg-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light p-3 px-8 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark mr-4 md:p-2 md:px-4 md:text-base sm:text-sm"
							>
								About Me
							</Link>
							<Link
								href={'/projects'}
								className="flex items-center bg-light text-dark dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark p-3 px-8 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-light md:p-2 md:px-4 md:text-base sm:text-sm"
							>
								View Projects
							</Link>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}
