import { render } from 'react-dom';
import App from './App';
// import { render, screen } from '@testing-library/react';
it('renders without crashing', () => {
	const div = document.createElement('div');
	render(<App />, div);
});
