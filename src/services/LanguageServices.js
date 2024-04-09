import requests from './httpService';

const LanguageServices = {
  getAllLanguages: async () => {
    return requests.get('/languages');
    // return requests.get('/language/all');
    // return []
  },

  // Commented for just noww
  // getShowingLanguage: async () => {
  //   return requests.get('/languages/show');
  //   // return []
  // },

  getLanguageById: async (id) => {
    return requests.get(`/languages/${id}`);
    // return requests.get(`/language/${id}`);
    // return []
  },

  addLanguage: async (body) => {
    return requests.post('/languages', body);


    // return requests.post('/language/add', body);

    // For Frontend
    // const currencies = [];
    // try {
    //   console.log("Adding currency:", body);
    //   await new Promise(resolve => setTimeout(resolve, 1000));
    //   currencies.push(body);
    //   return { success: true, message: "currency added successfully" };
    // } catch (error) {
    //   return { success: false, message: "Failed to add currency" };
    // }
  },

  addAllLanguage: async (body) => {
    return requests.post('/language/add/all', body);
  },

  updateLanguage: async (id, body) => {
    console.log("updated Languages", body)
    return requests.put(`/languages/${id}`, body);
    // return requests.put(`/language/${id}`, body);
  },

  updateManyLanguage: async (body) => {
    const { ids, status } = body;
    console.log("data", body);

    console.log("ids", ids);
    console.log("status", status); // Logging the status to verify

    return requests.patch('languages/update/many', { ids, status }); // Sending both ids and status
  },


  updateStatus: async (id, body) => {
    // console.log("updatestatus data", body)
    // console.log("updatestatus id", id)
    return requests.put(`/languages/status/${id}`, body);
  },

  deleteLanguage: async (id, body) => {
    return requests.delete(`/languages/${id}`, body);
    // return requests.patch(`/language/${id}`, body);
  },

  deleteManyLanguage: async (ids) => {
    // console.log("Deleting languages with IDs:", ids);
    // // console.log("Deleting languages with IDs Heres:", { data: ids });
    return requests.delete('/languages/delete/many', { data: ids.ids }); // Sending just the array of IDs
    // return requests.patch('/language/delete/many', body);
  },
};

export default LanguageServices;
