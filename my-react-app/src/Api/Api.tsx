import axios from "axios";
const key = "HD8a7nzqSCIuZgWulcZb4uNBftEJwJewIYNsf0KFCJg";
axios.defaults.baseURL = "https://api.unsplash.com/";
const fetchImages = async (query, per_page = 10, page = 1) => {
  const params = {
    headers: {
      Authorization: `Client-ID ${key}`,
    },
    params: {
      per_page,
      page,
      query,
    },
  };
  const response = await axios(`search/photos?`, params);
  return response.data;
};
export default fetchImages;