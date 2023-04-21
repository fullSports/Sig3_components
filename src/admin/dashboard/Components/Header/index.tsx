import './styles.css';
import { Switch } from '@mui/material';
import { formatDate } from '../../utils/functions/formatDate';
import { useTheme } from '../../../../utils/Hooks/useTheme';

const DashboardHeader = () => {
	const { theme, setTheme } = useTheme();

	const currentDay = new Date();
	const date = `${currentDay.getDate()}/${
		currentDay.getMonth() + 1
	}/${currentDay.getFullYear()}`;
	const dateNow = formatDate(date);

	return (
		<>
			<div className="home-header" key={'home-header'}>
				<div className="time-display">
					<span>{dateNow}</span>
				</div>
				<div className="contrast-controller">
					{theme === 'light' ? (
						<Switch onClick={() => setTheme('dark')} />
					) : (
						<Switch onClick={() => setTheme('light')} />
					)}
					<span>Contraste</span>
				</div>
			</div>
		</>
	);
};

export default DashboardHeader;
