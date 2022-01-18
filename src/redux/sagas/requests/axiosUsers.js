import axios from 'axios';

const url = "https://60dcb7a3c2b6280017febc27.mockapi.io/api/tabla/users";


export const axiosGetUsers = async () => {
    try {
        const response = await axios.get(url);
        return (response);
    } catch (error) {
        throw error;
    }
}

//este seria un post
export const axiosCreateUsers = async (users) => {
  try {
     const response = await axios.post(url, users);
     return (response);
  } catch (error) {
      throw error;
  }
}

//este es el delete
export const axiosDeleteUsers = async (id) => {
    try {
       const response = await axios.delete(url + '/' + id);
       return (response);
    } catch (error) {
        throw error;
    }
  }

//este es el Update/put
export const axiosUpdateUsers = async (id, info) => {
    try {
       const response = await axios.put(url + '/' + id, info);
       return (response);
    } catch (error) {
        throw error;
    }
  }
  
  export const axiosGetUsersById = async (id) => {
    try {
        const response = await axios.get(url + '/' + id);
        return (response);
    } catch (error) {
        throw error;
    }
}  