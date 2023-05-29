import AsyncStorage from '@react-native-async-storage/async-storage';
import { parse } from 'react-native-svg';
import { userdataModel } from '../models/userdataModel';

export const storeData = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (e: any) {
    console.error(e.message);
  }
};

export const storeMultiData = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (e: any) {
    console.error(e.message);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const data = JSON.parse(value);
      //   return data;
      //console.log(value);
      // console.log(typeof data);
      return data;
      // return value;
    }
  } catch (e: any) {
    console.log(e.message);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e: any) {
    console.error(e.message);
  }
};

export const containsKey = async (key: string) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys.includes(key);
  } catch (e: any) {
    console.error(e.message);
  }
};

export const retrieveDataFromStorage = async (keys : any) => {
  try {
    const retrievedData = {};

    const retrievalPromises = keys.map(async (key) => {
      const serializedData = await AsyncStorage.getItem(key);
      const parsedData = JSON.parse(serializedData);
      retrievedData[key] = parsedData;
    });

    await Promise.all(retrievalPromises);

    const extractedData = Object.values(retrievedData).map(value => {
      const { questionID, question_Type, pglevel, answer_selection, 
        answer_first_type, answer_first_content, answer_second_type, 
        answer_second_content, answer_third_type, answer_third_content } = value;
      return {
        questionID,
        question_Type,
        pglevel,
        answer_selection,
        answer_first_type,
        answer_first_content,
        answer_second_type,
        answer_second_content,
        answer_third_type,
        answer_third_content
      };
    });

    return extractedData;
  } catch (error) {
    console.log('Error retrieving data:', error);
    throw error;
  }
}

export const getResponse = async (length: number, keyname: string) => {
  try{
    const response = Array(length);
    for(let i=0; i<length; i++){
      response[i] = await getData(`${keyname}_${i}`);
    }
    //return response;
    console.log(response);
  }catch(e:any){
    console.error(e.message);
  }
}

export const parseData = async (key) => {
  // //초기화
  // const serializedValues = JSON.stringify(userdata);
  // await AsyncStorage.setItem(key, serializedValues);
  //아이템을 가져와서 파싱
  const storedValues = await AsyncStorage.getItem(key);
  const parsedValues = storedValues !== null ? JSON.parse(storedValues) : null;

  return parsedValues;
}

export const storingData = async (key, ) => {
  const parsedValues = parseData(key);

  //파싱 후 데이터 업데이트
  // parsedValues.questionID = jsondata.Questions_ID;
  // parsedValues.question_Type = jsondata.question_type;
  // parsedValues.pglevel = jsondata.page_level;
  // if(jsondata.question_type === "Threeline_Picker"){
  //   parsedValues.answer_first_type = "None";
  //   parsedValues.answer_first_content = null;
  //   parsedValues.answer_second_type = "DatePicker";
  //   parsedValues.answer_second_content = input;
  //   parsedValues.answer_third_type = "None";
  //   parsedValues.answer_third_content = null;
  // }else if(jsondata.question_type === "Button_Selector"){
  //   parsedValues.answer_selection = input;
  // }
  //업데이트 후 다시 저장
  const updatedValues = JSON.stringify(parsedValues);
  await AsyncStorage.setItem(key, updatedValues);
}