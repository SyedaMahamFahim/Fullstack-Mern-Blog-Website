import axios from "axios";

// axios.defaults.baseURL = "/api/v1/blogs";

export const axiosInstance=axios.create({
  baseURL:"/api/v1/blogs"
})

// const setHeaders = () => {
//   axios.defaults.headers.post["Content-Type"] =
//     "application/json;charset=utf-8";
//   if (localStorage.getItem("token")) {
//     axios.defaults.headers.common[
//       "Authorization"
//     ] = `token ${localStorage.getItem("token")}`;
//     console.log("token set ", localStorage.getItem("token"));
//   }
// };

export const getReq = async (enpoint) => {
  return await axios
    .get(`${enpoint}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};



