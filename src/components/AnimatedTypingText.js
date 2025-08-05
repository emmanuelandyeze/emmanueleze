// src/components/AnimatedTypingText.jsx
'use client';

import { TypeAnimation } from 'react-type-animation';

const AnimatedTypingText = ({ className }) => {
	return (
		<div className={className}>
			<TypeAnimation
				sequence={[
					'const greeting = "Hello World!";', // The first string to display
					2000, // wait 2s
					'', // delete the string
					500, // wait 0.5s
					// 'print("Emmanuel Andy Eze");', // The next string to display
					// 2000, // wait 2s
					'', // delete the string
					500, // wait 0.5s
					'const name = "Emmanuel Andy Eze";',
					2000,
					'',
					500,
					'Welcome to my world!',
					2000,
					'',
					500,
				]}
				wrapper="h1" // The wrapper element
				cursor={true}
				repeat={Infinity}
				className="font-mono" // Use a monospaced font
			/>
		</div>
	);
};

export default AnimatedTypingText;
