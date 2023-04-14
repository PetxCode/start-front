import axios from "axios";

const url = "http://localhost:2622/api/company/";

export const registerCompany = async (extend: string, data: {}) => {
  try {
    await axios.post(`${url}/${extend}`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async () => {
  try {
    await axios.get("http://localhost:2622/api/company/").then((res) => {
      console.log("getting data: ", res);
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
