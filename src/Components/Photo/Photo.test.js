import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Photo from './Photo';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Photo', () => {
	it('renders ', () => {
		const testImage = {
			id: '1',
			owner: '2',
			secret: '3',
			server: '4',
			farm: 5,
			title: 'testTitle'
		}
		const wrapper = shallow(<Photo image={testImage} />);
		expect(wrapper.is('div')).to.be.true;
	});

	it('should render an img element with the source equal to a composite of its image prop', () => {
		const testImage = {
			id: '1',
			owner: '2',
			secret: '3',
			server: '4',
			farm: 5,
			title: 'testTitle'
		}
		const wrapper = shallow(<Photo image={testImage} />);
		const img = wrapper.find('img');
		expect(img.props().src).to.equal('https://farm5.staticflickr.com/4/1_3.jpg');
	});
});