import { Axios,AxiosFormData } from "./Axios";

const UserApi = {
  update: (id, params) => Axios.put(`/users/${id}`, params),
  updateImage:    (params) => AxiosFormData.post(`/users/uploadImage`,params),
  
};

export default UserApi;
