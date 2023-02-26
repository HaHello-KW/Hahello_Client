import axios from 'axios';
import {useState} from 'react';

const handleGet = async ({url}: any) => {
  try {
    // const response = await axios.get(url);
    axios.get(url).then(res => {
      console.log(res);
    });
    //데이터는 response.data 안에 들어있다. or response.data.data
    // setContents(response.data);
    //return response.data;
  } catch (error) {
    //setError('An error has occurred');
  }
};

export default handleGet;
