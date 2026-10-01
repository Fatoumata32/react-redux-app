import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./reducers";

const STORAGE_KEY = "reduxState";

const loadState = (): ReturnType<typeof rootReducer> | undefined => {
	try {
		const serializedState = localStorage.getItem(STORAGE_KEY);
		return serializedState
			? (JSON.parse(serializedState) as ReturnType<typeof rootReducer>)
			: undefined;
	} catch {
		return undefined;
	}
};

export const store = createStore(
	rootReducer,
	loadState(),
	applyMiddleware(logger),
);

store.subscribe(() => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
	} catch {
		return;
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;