export enum ActionTypes {
	TOGGLE_THEME = "TOGGLE_THEME",
}

export enum PayloadTypes {}

export interface Action {
	type: ActionTypes;
	payload?: any;
}
