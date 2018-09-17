function data(state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO':
      let results = [];
      if (action.payload.query) {
        state.data.categories.forEach((category) => {
          category.playlist.forEach(item => {
            if (item.author.includes(action.payload.query)) results.push(item);
          });
        });
      }

      return {
        ...state,
        search: results,
      };
      break;
    default:
      return state;
  }

}

export default data;
