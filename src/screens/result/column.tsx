import {
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {SafeAreaView} from 'react-native-safe-area-context';

const sampleData = [
  {
    id: '1',
    title: '가입력 보존을 위한 "난자냉동"t1',
    body: '요즘들어 친구들과의 모임에서 자주 등장하는 단어 "난자냉동"이 궁금하다면',
  },
  {id: '2', title: '난소건강을 지키는 "지중해 식단"t2', body: 'b2'},
  {id: '3', title: '나만의 맞춤 영양제는 없을까?', body: 'b3'},
  {id: '4', title: '임신성 당뇨 관리하기', body: 'b4'},
  {id: '5', title: '완경기 여성,어떻게 운동하면 좋을까?', body: 'b5'},
  {id: '6', title: '둘째 아이, 가질까 말까?', body: 'b6'},
  {id: '7', title: 't7', body: 'b7'},
  {id: '8', title: 't8', body: 'b8'},
];

const Search = () => {
  const Dinput = () => (
    <View>
      <TextInput
        style={{
          height: 42,
          //width: '80%',
          width: 358,
          borderColor: '#F47100',
          borderWidth: 1,
          borderRadius: 8,
          marginBottom: 20,
          alignSelf: 'center',
        }}
        // Adding hint in TextInput using Placeholder option.
        placeholder="컨텐츠검색하기"
        // Making the Under line Transparent.
        underlineColorAndroid="transparent"
        onSubmitEditing={() => alert('aa')}
      />
      <TouchableOpacity>
        <Text style={{left: '85%', top: '-260%'}}>검색</Text>
      </TouchableOpacity>
    </View>
  );

  // const SampleComp = () => {
  //   return (
  //     // <View style={{width: 340, height: 60, backgroundColor: 'red'}}></View>
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //     </View>
  //   );
  // };
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = value => {
    setInputValue(value);
    const results = sampleData.filter(item => item.title.includes(value));
    setSearchResults(results);
  };

  const Item = ({imagePath, title, body}) => (
    <TouchableOpacity onPress={() => alert('dd')}>
      <View style={styles.item}>
        <Image
          source={imagePath}
          resizeMode="contain"
          style={{width: '100%', height: '100%', left: '-170%'}}
        />
        <View
          style={{left: '-340%', width: 220, justifyContent: 'space-around'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{fontSize: 12}}>{body}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      body={item.body}
      imagePath={require('../../../assets/images/Rectangle_333.png')}
    />
  );

  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center'}}>전문가 칼럼{'\n'}</Text>

      <Dinput></Dinput>
      <View style={{alignSelf: 'center', width: 358}}>
        <Text style={{alignSelf: 'auto'}}>전문가 칼럼</Text>
      </View>

      <FlatList
        data={sampleData}
        //data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderColor: 'gray',
    height: 84,
    borderWidth: 1,
    padding: 3,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    width: 350,
  },
  title: {
    fontSize: 16,
  },
});
export default Search;
