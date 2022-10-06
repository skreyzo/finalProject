const initState = {
  news: [
    {
      id: "1",
      title: "Наводнение в африке",
      body: "Негры никогда не видели столько воды",
    },
    {
      id: "2",
      title: "ВМФ Беларуси",
      body: "На ВМС Беларуси появился новый крейсер",
    },
  ],
};

export const reducers = (state = initState, action) => {
  switch (action.type) {
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
