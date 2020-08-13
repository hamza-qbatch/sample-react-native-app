const saveClient = (client) => {
  return {
    type: 'SAVE_CLIENT_NAME',
    payload: client,
  };
};

export default saveClient;
