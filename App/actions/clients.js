const saveClients = (client) => {
  return { type: 'SAVE_NEW_CLIENT', payload: client };
};

export default saveClients;
