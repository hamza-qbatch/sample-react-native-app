const initialState = {
  clientNames: [],
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_CLIENT_NAME': {
      const { clientNames } = state;
      const clientList = clientNames;
      clientList.push(action.payload);
      return {
        ...state,
        clientNames: clientList,
      };
    }
    default: {
      return state;
    }
  }
};

export default clients;
