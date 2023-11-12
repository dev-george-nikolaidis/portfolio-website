import { Action, ActionTypes } from "./Actions";
import { GeneralContextState } from "./State";

type ReducerType = (state: GeneralContextState, action: Action) => GeneralContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.TOGGLE_THEME:
			const theme = localStorage.getItem("theme") || "Light";
			return {
				...state,
				theme: theme,
			};

		default:
			return state;
	}
};
