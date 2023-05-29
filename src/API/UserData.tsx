import {
    storeData,
    getData,
    containsKey,
    removeData,
    storeMultiData,
    getResponse,
    retrieveDataFromStorage
  } from '../screens/async';

export const UserData_default = () => {
    const keys = ['default_0','default_1', 'default_2'];
    retrieveDataFromStorage(keys)
    .then((data)=>{
      console.log(data);

      return data;
    })
    .catch((error) => {
      console.log(error);
    })
}

export const UserData_type = () => {
    
}