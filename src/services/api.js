import axios from "axios";
import handleError from "./handleError";

let endPoint = "https://randomuser.me/api/";

const GetApi = async (valParams) => {
  let res;
  try {
    const { data } = await axios({
      method: "GET",
      url: endPoint,
      params: valParams,
    });
    res = data;
  } catch (error) {
    handleError(error?.response?.status, error?.response?.data?.message);
  }
  return { res };
};


export { GetApi,}
