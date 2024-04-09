// // import categoryData from "utils/categories";
// import requests from "./httpService";

// const CategoryServices = {
//   getAllCategory: async () => {
//     return requests.get("/category");
//     // return []
//     // return categoryData;
//   },

//   getAllCategories: async () => {
//     return requests.get("/category/all");
//     // return []
//     // return categoryData;
//   },

//   getCategoryById: async (id) => {
//     return requests.get(`/category/${id}`);
//     // return [];

//   },

//   addCategory: async (body) => {
//     return requests.post("/category/add", body);
//     // return [];

//   },

//   // addCategory: async (newCategory) => {
//   //   console.log("New Category:", newCategory);
//   //   try {
//   //     await new Promise(resolve => setTimeout(resolve, 1000));
//   //     categoryData.push(newCategory);
//   //     console.log("Updated Category Data:", categoryData);
//   //     return { success: true, message: "Category added successfully", data: newCategory };
//   //   } catch (error) {
//   //     console.error("Error adding category:", error);
//   //     return { success: false, message: "Failed to add category" };
//   //   }
//   // },


//   addAllCategory: async (body) => {
//     return requests.post("/category/add/all", body);
//     // return [];

//   },

//   updateCategory: async (id, body) => {
//     return requests.put(`/category/${id}`, body);
//   },

//   updateStatus: async (id, body) => {
//     return requests.put(`/category/status/${id}`, body);
//   },

//   deleteCategory: async (id) => {
//     //   try {
//     //     console.log("Deleting category with ID:", id);
//     //     console.log("Before deletion:", categoryData);
//     //     await new Promise(resolve => setTimeout(resolve, 1000));
//     //     categoryData = categoryData.filter(category => category._id !== id);
//     //     console.log("After deletion:", categoryData);
//     //     return { success: true, message: "Category deleted successfully" };
//     //   } catch (error) {
//     //     console.error("Error deleting category:", error);
//     //     return { success: false, message: "Failed to delete category" };
//     //   }
//     // },



//     // deleteCategory: async (id, body) => {
//     //   console.log("Request Body:", body);
//     //   const { ids } = body;
//     //   try {
//     //     await new Promise(resolve => setTimeout(resolve, 1000));
//     //     const updatedCategories = categoryData.filter(category => category._id !== id);
//     //     categoryData.length = 0;
//     //     updatedCategories.forEach(category => categoryData.push(category));
//     //     console.log("Updated categories:", updatedCategories);
//     //     return { success: true, message: "Category deleted successfully", data: updatedCategories };
//     //   } catch (error) {
//     //     return { success: false, message: "Failed to delete category" };
//     //   }
//     // },


//     updateManyCategory: async (body) => {
//       return requests.patch("/category/update/many", body);
//       // return [];

//     },

//       deleteManyCategory: async (body) => {
//         return requests.patch("/category/delete/many", body);
//         // return [];
//       }
//   },
// };

// export default CategoryServices;




// justt added For Now Heree Justt Checkings


import requests from "./httpService";

const CategoryServices = {
  getAllCategory: async () => {
    return requests.get("/categories");
    // return []
  },

  getAllCategories: async () => {
    return requests.get("/categories/all");
    // return [];
  },

  getCategoryById: async (id) => {
    return requests.get(`/categories/${id}`);
    // return [];
  },

  addCategory: async (body) => {
    console.log("datas :", body)
    console.log("datas name :", body.name.en)
    return requests.post("/categories", { body, name: body.name.en });
    // return [];
  },

  addAllCategory: async (body) => {
    return requests.post("/categories/add/all", body);
    // return [];

  },

  updateCategory: async (id, body) => {
    return requests.put(`/categories/${id}`, body);
  },

  updateStatus: async (id, body) => {
    return requests.put(`/categories/status/${id}`, body);
  },

  deleteCategory: async (id, body) => {
    return requests.delete(`/categories/${id}`, body);
  },

  updateManyCategory: async (body) => {
    const { ids, status } = body;

    return requests.patch("/categories/update/many", { ids, status });
    // return [];
  },

  deleteManyCategory: async (body) => {
    // console.log("datas :", body.ids)
    return requests.patch("/categories/delete/many", body.ids);
    // return [];

  },
};

export default CategoryServices;
