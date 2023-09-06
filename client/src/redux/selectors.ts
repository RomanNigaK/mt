import { RootState } from "./store";

export const selectorCity = (store: RootState) => store.app.city;
export const selectorPage = (store: RootState) => store.app.page;
export const selectorMessages = (store: RootState) => store.app.messages;
