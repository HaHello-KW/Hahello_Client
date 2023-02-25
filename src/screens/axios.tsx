import axios from 'axios';
import {useState} from 'react';

const handleGet = async ({url}: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  try {
    //요청 시작 할 때에는 error, contents 초기화
    setError('');
    // setContents(null);
    //loading 상태를 true로 바꿈
    setLoading(true);

    const response = await axios.get(url);
    //데이터는 response.data 안에 들어있다. or response.data.data
    // setContents(response.data);

    return response.data;
  } catch (error) {
    setError('An error has occurred');
  }
  //loading 끄기
  setLoading(false);
};

export default handleGet;
