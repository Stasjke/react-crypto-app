import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import PortfolioChart from '../PortfolioChart';
import AssetsTable from '../AssetsTable';

export default function AppContent({ isDarkTheme }) {
	const { assets, crypto } = useCrypto();

	const contentStyle = {
		textAlign: 'center',
		minHeight: 'calc(100vh - 60px)',
		color: isDarkTheme ? 'black' : 'white',
		background: isDarkTheme ? 'black' : 'white',
		padding: '1rem',
	};

	const cryptoPriceMap = crypto.reduce((acc, c) => {
		acc[c.id] = c.price;
		return acc;
	}, {});

	return (
		<Layout.Content style={contentStyle}>
			<Typography.Title
				level={3}
				style={{ textAlign: 'left', color: isDarkTheme ? 'white' : 'black' }}
			>
				Portfolio:{' '}
				{assets
					.map((asset) => asset.amount * cryptoPriceMap[asset.id])
					.reduce((acc, v) => (acc += v), 0)
					.toFixed(2)}
				$
			</Typography.Title>
			<PortfolioChart />
			<AssetsTable />
		</Layout.Content>
	);
}
