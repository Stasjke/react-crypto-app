import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext, useState } from 'react';
import CryptoContext from '../../context/crypto-context';

export default function AppLayout() {
	const { loading } = useContext(CryptoContext);
	const [isDarkTheme, setIsDarkTheme] = useState('false');

	const onClickButton = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	if (loading) {
		return <Spin fullscreen />;
	}

	return (
		<Layout>
			<AppHeader setBackground={onClickButton} isDarkTheme={isDarkTheme} />
			<Layout>
				<AppSider isDarkTheme={isDarkTheme} />
				<AppContent isDarkTheme={isDarkTheme} />
			</Layout>
		</Layout>
	);
}
