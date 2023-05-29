import axios from 'axios';

const BASE_URL = '';

const sendAPIRequest = async(data:any)=>{
    try{
        const response = await axios.post(`${BASE_URL}/...`, data);

        console.log(response.data);

        return response.data;
    }catch(error){
        console.error(error);
        
        throw error;
    }
};

export default sendAPIRequest;