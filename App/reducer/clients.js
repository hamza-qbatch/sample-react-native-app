const initialState = {
  clientsList: [],
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_NEW_CLIENT': {
      const list = state.clientsList;
      list.push(action.payload);
      return {
        ...state,
        clientsList: [...list],
      };
    }
    default: {
      return state;
    }
  }
};

export default clients;
