import axios from 'axios';

const url = 'http://ufc-data-api.ufc.com/api/v1/us/fighters';

export const FETCH_FIGHTER = 'FETCH_FIGHTER';

export function FetchFighter() {
	const fetch = `${url}`;
	const request = axios.get(fetch);

	return({
		type: FETCH_FIGHTER,
		payload: request
	});
}