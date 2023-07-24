import store from "./store";
import { addComment, changeTheme, replyComment } from "./entities";

export const changeThemeStore = (theme) => {
  store.dispatch(changeTheme(theme));
};

export const addCommentStore = (articleId, comment) => {
  store.dispatch(addComment(articleId, comment));
};

export const replyCommentStore = (articleId, commentId, reply) => {
  store.dispatch(replyComment(articleId, commentId, reply));
};
