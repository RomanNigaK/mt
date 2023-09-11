import { RootState } from "./store";

export const selectorCity = (store: RootState) => store.app.city;
export const selectorPage = (store: RootState) => store.app.page;
export const selectorMessages = (store: RootState) => store.app.messages;
export const selectorError = (store: RootState) => store.app.currentError;
export const selectorUser = (store: RootState) => store.user.user;
export const selectorIsModal = (store: RootState) => store.app.isModal;
