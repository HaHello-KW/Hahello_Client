import React, {useState, useEffect} from 'react';
import defaultPage from '../components/defaultPage';
import axios from 'axios';
import {defaultPageModel} from '../models/defaultPageModel';
import MyUpBar from '../components/MyUpBar';
import GobackButton from '../components/gobackButton';
// import {useNavigation} from '@react-navigation/native';
import DefaultPage from '../components/defaultPage';

//for testing
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {defaultPageStyles} from '../styles/defaultPageStyles';
import testing from '../txtCollection/testing.json';
import testing1 from '../txtCollection/testing1.json';

// type testingType = {
//   [key: string]: any;
// };

const Survey = () => {
  // const [contents, setContents] = useState([]);
  // const [defaultpage, setDefaultPage] = useState<defaultPageModel>({
  //   id: 0,
  //   pgLevel: 0,
  //   questionType: '',
  //   questionTxt: '',
  //   selectionTxt: [],
  //   firstPickerType: '',
  //   firstlineTxt: '',
  //   secondPickerType: '',
  //   secondlineTxt: '',
  //   thirdPickerType: '',
  //   thirdlineTxt: '',
  //   nextpage: '',
  // });

  /*
  axios 예시

  useEffect(() => {
    axios.get(url).then(response => {
      setDefaultPage(response.data);
    });
  }, []);

  const axios_get = () => {
	axios.get("http://localhost:8080/get")
    	.then((response) => {
        	console.log(response);
        })
        .catch((error) => {
        	console.log(error);
        })
}

  const axios_post = () => {
	// const data = {
  //   	name : 'name',
  //       age: 23
  //   }
    
    axios.post("http://localhost:8000/post", data)
    	.then((response => {
        	console.log(response)
        })
        .catch((error) => {
        	console.log(error);
        })
}
*/

  //서버로 전달할 값 어디다가 저장해...?
  //-> 밑의 const [input, setInput]으로 전달 ㄱㄴ할듯??

  //deafultpage 컴포넌트로부터 getidx값 or picked date 받아오기 (자식->부모)
  const [input, setInput] = useState();
  function parentFucntion(x: any) {
    // console.log(x);
    setInput(x);
  }
  console.log(input);

  //testing2.json = default~type 모두 한꺼번에 있는거, 근데 이건 아닌듯?
  // var [itr1, setItr1] = useState(0);
  // var [itr2, setItr2] = useState(0);
  // const pageTypes = Object.keys(testing);
  // var [nowPagetype, setNowPagetype] = useState(pageTypes[itr1]);
  // const [nowPage, setNowPage] = useState(testing[nowPagetype]);
  // const [contents, setContents] = useState(nowPage[itr2]);

  //iterator 쓸거면 굳이 navigation 안갖고와도 될거같은데...?
  // const navigation = useNavigation();

  //현재처럼 말고 페이지 하나씩 json형태로 갖고오면 안되는 것인가?
  //handlenext마다 axios_post해서 서버로 값 보내고 그에 따라 다음 페이지 가져오기,,,는 안되려나?
  //
  //현재는 각 type별로 모든 페이지들의 정보가 담긴 json 가져오는 형태...
  //iterator로 다음 페이지를 갖고오는 것
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [contents, setContents] = useState('');

  var [iterator, setIterator] = useState(0);
  const [contents, setContents] = useState(testing);
  const [nowPage, setNowPage] = useState(contents[iterator]);

  /*
  handleGoback, handleNext에 포함되어야 하나?
  next버튼 누를때마다 사용자가 입력한 거 전달해서...그에 맞게 다음 페이지 json 로딩...
  그러면 iterator 필요없고 navigation도 필요없지 않나...? 아닌가...?

  const handleGet = async() => {
    try {
      //요청 시작 할 때에는 error, contents 초기화
      setError(null);
      setContents(null);
      //loading 상태를 true로 바꿈
      setLoding(true);

      const response = await axios.get('어쩌고 url', {
        params: {
          id: 어쩌고
          name: 저쩌고
          ...
        }
      });

      //데이터는 response.data 안에 들어있다. 
      setContents(response.data);
    } catch(e) {
      setError(e);
    }
    //loading 끄기
    setLoading(false);
  };

  // 한페이지씩 갖고오는게 아니라면...? -> form 형식으로 데이터 전달해야하나...?
  //const form - new FormData();
  //form.append(어쩌고, 저쩌고);
  //axios.post('어쩌고url', form).then ~

  const handlePost = async (event) => {
    // if (!fullName.trim() || !email.trim()) {
    //   alert("Name or Email is invalid");
    //   return;
    // }
    
    try {
      //loading 상태 true로 바꿔주고
      setLoading(true);
      //error, contents 초기화 안해도 되나..?
      //input 값을 서버로 전달!! 맞겠지?
      const response = await axios.post(`저쩌고 url`, {
        input
      });
      //요청이 성공적 + 결과로 새로운 리소스 생성 | POST, PUT
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        //loading 상태 false로 바꿔주고 input값 reset...!..?
        setLoading(false);
        setInput();
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      // setIsLoading(false);
    }
  };
  */

  //현재는 iterator로 왔다갔다 하면서... -> type 페이지까지 고려한다면 이게맞나?
  //만일 iterator가 아니라 json이 페이지(각 질문)별로 오는거면
  //handlePost, handleGet 방식으로 해야할듯...? 어 이러면 nextpage가 필요하겠네 model 속성중에
  const handleGoback = () => {
    if (iterator > 0) {
      iterator--;
      setIterator(iterator);
    } else {
      iterator = 0;
      setIterator(iterator);
    }
    setNowPage(contents[iterator]);
  };

  const handleNext = () => {
    if (iterator < contents.length) {
      iterator++;
      setIterator(iterator);
    } else {
      iterator = contents.length - 1;
      setIterator(iterator);
    }
    // setNowPage(pageName[iterator]);
    setNowPage(contents[iterator]);
  };

  //jsx구성요소 오류 해결 필요
  return (
    <>
      <MyUpBar level={nowPage.pgLevel} />
      <GobackButton onPress={handleGoback} />
      <DefaultPage pageContents={nowPage} parentFucntion={parentFucntion} />
      <View style={[defaultPageStyles.container_next]}>
        {/* <NextButton destination={pageContents.nextpage} disabled={false} /> */}
        <TouchableOpacity style={styles.nxt_bt} onPress={handleNext}>
          <Text style={styles.nxt_txt}>다음</Text>
        </TouchableOpacity>
      </View>
    </>
  );
  // }
};

const styles = StyleSheet.create({
  nxt_bt: {
    justifyContent: 'center',
    backgroundColor: '#F47100',
    marginTop: '2%',
    //크기 px아닌 %로 설정
    //selection button box와 동일한 구조로
    width: '70%',
    height: '45%',
    borderRadius: 5,
  },
  nxt_txt: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FBFBFB',
  },
});

export default Survey;
