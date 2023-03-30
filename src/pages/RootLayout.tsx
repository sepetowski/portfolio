import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav/Nav';

export const RootLayout = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};
