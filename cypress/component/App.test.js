import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from '../../src/component/App';

describe('App', () => {
	it('renders', () => {
		mount(<App />);
	});
});
