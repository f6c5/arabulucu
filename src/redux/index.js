import store from "./store";
import { changeTheme } from "./entities";

export const changeThemeStore = (theme) => {
  store.dispatch(changeTheme(theme));
};
