import requests from "./httpService";

const CustomerServices = {
  getAllCustomers: async () => {
    return ([{ id: 1, name: 'Rohit', JoiningDate: '16/06/2013', email: 'customer@test.com', phone: '9034182898' }])
  },
  // getAllCustomers: async ({ searchText = "" }) => {
  //   return requests.get(`/customer?searchText=${searchText}`);

  // }

  addAllCustomers: async (body) => {
    return requests.post("/customer/add/all", body);
  },
  // user create
  createCustomer: async (body) => {
    return requests.post(`/customer/create`, body);
  },

  filterCustomer: async (email) => {
    return requests.post(`/customer/filter/${email}`);
  },

  getCustomerById: async (id) => {
    return requests.get(`/customer/${id}`);
  },

  updateCustomer: async (id, body) => {
    return requests.put(`/customer/${id}`, body);
  },

  deleteCustomer: async (id) => {
    return requests.delete(`/customer/${id}`);
  },
};

export default CustomerServices;
