import { ProjectDetails } from '../../types/types';
import { Header } from '../common/Header';
import { Titles } from '../../types/types';
import { ProjectInfoMain } from './ProjectInfoMain';
import countries from '../../assets/lotties/countries.json';
import recipe from '../../assets/lotties/food.json';
import form from '../../assets/lotties/form.json';
import maps from '../../assets/lotties/maps.json';
import news from '../../assets/lotties/news.json';
import shop from '../../assets/lotties/shop.json';


type Props = {
	details: ProjectDetails;
};

export const ProjectInfoHeader = ({ details }: Props) => {
	let lottie;
	switch (details.title) {
		case Titles.news:
			lottie = news;
			break;
		case Titles.form:
			lottie = form;
			break;
		case Titles.recipe:
			lottie = recipe;
			break;
		case Titles.countries:
			lottie = countries;
			break;
		case Titles.maps:
			lottie = maps;
			break;
		case Titles.shop:
			lottie = shop;
			break;
	}
	return (
		<>
			<Header
				title={details.title}
				category='overview.'
				text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos, cupiditate
    					id repellat quae alias ad quo similique ut debitis.Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
				src={lottie}
				link={false}
			/>
			<ProjectInfoMain/>
		</>
	);
};