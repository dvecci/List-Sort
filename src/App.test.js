import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
	it('renders ', () => {
	  const fetchImagesStub = sinon.stub();
	  const wrapper = shallow(<App fetchImages={fetchImagesStub} />);
	  expect(wrapper.is('div')).to.be.true;
	});

	it('should fetch photos on mount', () => {
		const fetchImagesStub = sinon.stub();
		const wrapper = shallow(<App fetchImages={fetchImagesStub} />);
		expect(fetchImagesStub.calledOnce).to.be.true;
	})

	it('should trigger filter on change', () => {
		const fetchImagesStub = sinon.stub();
		const filterResultsStub = sinon.stub();
		const wrapper = shallow(<App filterResults={filterResultsStub} fetchImages={fetchImagesStub} />);
		const event = { target: {name: 'filterInput', value: 'a'}};
		wrapper.find('input').simulate('change', event);
		expect(filterResultsStub.calledWith('a')).to.be.true;
	});
})