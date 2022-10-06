import ACTypes from "./types";

const initState = {
  news: [],
};

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case "initState":
      const newsList = action.payload.data.getNewsList;
      return { ...state, news: newsList };

    case "DELETE_NEWS":
      const filteredNews = state.news.filter(
        (news) => news.id !== action.payload.id
      );

      return { ...state, news: filteredNews };

    case "ADD_NEWS":
      const { values } = action.payload;

      return {
        ...state,
        news: [
          ...state.news,
          { ...values, id: new Date().valueOf().toString(36) },
        ],
      };

    default:
      return state;
  }
}; 
