/* -----------------------------
Reducers: The actual functionality that carries out the emitted action to update state.
------------------------------ */

import {
	UPDATE_PRODUCTS,
	UPDATE_CATEGORIES,
	UPDATE_CURRENT_CATEGORY,
} from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		// if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
		case UPDATE_PRODUCTS:
			return {
				...state,
				products: [...action.products],
			};
		// if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
		case UPDATE_CATEGORIES:
			return {
				...state,
				categories: [...action.categories],
			};

		default:
			return state;
	}
};