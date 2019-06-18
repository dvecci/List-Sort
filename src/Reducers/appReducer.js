const initialState = {
	photos: [],
	filteredPhotos: []
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FILTER':
			const queryString = action.payload.toLowerCase();
			const filteredPhotos = (state || {}).photos.filter(photo => photo.title.toLowerCase().includes(queryString))
			return {
				...state,
				filteredPhotos
			};
		case 'SET_RESULTS':
			const photos = (action.payload || {}).photos.photo;
			const alphabetizedPhotos = photos.sort((a, b) => {
				if (a.title.toLowerCase() > b.title.toLowerCase()) {
					return 1;
				}
				return -1;

			});
			return {
				...state,
				photos: alphabetizedPhotos,
				filteredPhotos: alphabetizedPhotos
			};
		default:
			return state
	}
};

export default appReducer;