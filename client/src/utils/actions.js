/* -----------------------------
Actions: These define the types of events that can be emitted to update state.
State can only be updated if it's a predefined action.
------------------------------ */

// defining how three parts of our state will be maintained and updated:
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
