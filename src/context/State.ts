export interface GeneralContextState {
	theme: string;
}

export const initialState: GeneralContextState = {
	theme: localStorage.getItem("theme") || "Light",
};
