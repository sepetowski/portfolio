import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fade } from '../../animation/animations';

interface Props {
	isBig: boolean;
	img: string;
	title: string;
	text: string;
	commingSoon?: Boolean;
}

export const ProjetCard = ({ img, isBig, text, title, commingSoon = false }: Props) => {
	return (
		<motion.div
			variants={fade}
			className={`w-full h-52 md:h-72 lg:h-80 rounded-md overflow-hidden relative transition-transform duration-200 shadow-md hover:scale-[1.02] ${
				isBig ? 'md:grow' : 'md:w-2/3 xl:w-1/3'
			}`}>
			<img className='w-full h-full object-cover' src={img} alt={title} />
			<div className='absolute top-0 bg-black bg-opacity-60 h-full w-full flex justify-end items-start flex-col p-4 md:p-8 '>
				<h3 className='mb-1 font-bold text-lg md:text-xl lg:text-2xl'>{title}</h3>
				<p className='mb-2 text-sm md:text-base'>{text}</p>
				{!commingSoon && (
					<Link
						to={`project/${title}`}
						className='uppercase  text-sm md:text-base text-orange-400 font-semibold'>
						Learn more...
					</Link>
				)}
			</div>
		</motion.div>
	);
};
