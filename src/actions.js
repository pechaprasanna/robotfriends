import { CHANGE_SEARCH_FIELD,
		 REQUEST_ROBOTS_PENDING,
		 REQUEST_ROBOTS_SUCCESS,
		 REQUEST_ROBOTS_FAILED
 } from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export async function requestRobots(dispatch) {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
	  	const data = await response.json();
	  	await dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data});
	} catch(error) {
		await dispatch({type: REQUEST_ROBOTS_FAILED, payload: error});
	}

}