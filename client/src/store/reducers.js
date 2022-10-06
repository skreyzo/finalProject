import ACTypes from "./types";

const initState = {
  news: [
    { id: "1", title: "Название 1", body: "Текст статьи 1" },
    { id: "2", title: "Название 2", body: "Текст статьи 2" },
  ],
};

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_NEWS":
      const filteredNews = state.news.filter(
        (news) => news.id !== action.payload.id
      );
      console.log(action);

      return { ...state, news: filteredNews };

    case ACTypes.ADD_HOMEPAGE:
      const text = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...text, id: new Date().valueOf().toString(36) },
        ],
      };

    default:
      return state;
  }
};
