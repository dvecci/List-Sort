import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai';
import appReducer from './appReducer';
import { fetchFlickrImages } from '../Actions/actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('appReducer', () => {
	it('should dispatch set results successfully', () => {
		const store = mockStore();
		const expectedActions = [
	        'SET_RESULTS'
	    ];

	 	fetchMock.get('*', { response: 200 })

	    return store.dispatch(fetchFlickrImages())
	      .then(() => {
	        const actualActions = store.getActions().map(action => action.type)
	        expect(actualActions).to.eql(expectedActions)
	     })

	    fetchMock.restore()
	});
});