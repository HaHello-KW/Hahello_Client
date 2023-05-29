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
import {SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import GobackButton from '../../components/gobackButton';

const Search = ({navigation, route}) => {
  const navi = useNavigation();
  const sampleData = [
    {
      id: '1',
      title: '가입력 보존을 위한 "난자냉동"',
      body: '요즘들어 친구들과의 모임에서 자주 등장하는 단어 "난자냉동"이 궁금하다면',
      imgpath: require('../../../assets/images/Rectangle_333.png'),
    },
    {
      id: '2',
      title: '난소건강을 지키는 "지중해 식단"',
      body: '난임, 난소 건강에 좋다는 지중해 식단,어디까지 알고 있니?',
      imgpath: require('./columnImage/Rectangle_346.png'),
    },
    {
      id: '3',
      title: '나만의 맞춤 영양제는 없을까?',
      body: '코엔자임 Q10,오메가3... 이름을 들어 본 영양제는 많은데 나만을 위한 맞춤 영양제는 없을까?',
      imgpath: require('./columnImage/Rectangle_347.png'),
    },
    {
      id: '4',
      title: '임신성 당뇨 관리하기',
      body: '임신성 당뇨병인데 어떤 운동을 언제 해야 할까요?',
      imgpath: require('./columnImage/Rectangle_348.png'),
    },
    {
      id: '5',
      title: '완경기 여성,어떻게 운동하면 좋을까?',
      body: '운동은 완경 증상을 완하시키고 스트레스 감소에도 효과적이라는데 어떤 운동을 해야할까?',
      imgpath: require('./columnImage/Rectangle_349.png'),
    },
    {
      id: '6',
      title: '둘째 아이, 가질까 말까?',
      body: '둘째를 가지면 어떤 점이 좋을까? 임신하기 전에 고려해야 할 것들은 어떤 것들이 있을까?',
      imgpath: require('./columnImage/Rectangle_350.png'),
    },
  ];

  const [filteredData, setFilteredData] = useState(sampleData);
  const [searchText, setSearchText] = useState('');
  const handleSearch = text => {
    setSearchText(text);
    const filtered = sampleData.filter(item => item.title.includes(text));
    setFilteredData(filtered);
  };

  const Dinput = () => (
    <View style={{height: 70}}>
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
        value={searchText}
        onChangeText={handleSearch}
        //returnKeyType="done"
        onSubmitEditing={handleSearch} // 사용자가 엔터를 눌렀을 때 호출되는 콜백 함수
      ></TextInput>
      <TouchableOpacity>
        {/* <Text style={{left: '85%', top: '-260%'}}>검색</Text> */}
        <Icon
          name="search-outline"
          size={30}
          style={{left: '90%', top: '-150%'}}></Icon>
      </TouchableOpacity>
    </View>
  );

  const Item = ({imagePath, title, body}) => (
    <TouchableOpacity onPress={() => navi.navigate('ColumnDetail')}>
      <View style={styles.item}>
        <Image
          source={imagePath}
          resizeMode="contain"
          style={{width: '100%', height: '100%', left: '-170%'}}
        />
        <View
          style={{left: '-340%', width: 220, justifyContent: 'space-around'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{fontSize: 12, width: '110%', color: '#242424'}}>
            {body}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      body={item.body}
      //imagePath={require('../../../assets/images/Rectangle_333.png')}
      imagePath={item.imgpath}
    />
  );

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 16,
          fontWeight: '400',
          color: '#000000',
        }}>
        {'\n'}전문가 칼럼{'\n'}
      </Text>

      <Dinput></Dinput>

      <View style={{alignSelf: 'center', width: 358}}>
        <Text
          style={{
            alignSelf: 'auto',
            fontWeight: '700',
            fontSize: 18,
            color: '#000000',
          }}>
          전문가 칼럼
        </Text>
      </View>

      <FlatList
        data={searchText ? filteredData : sampleData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* <ScrollView>
        {filteredData.map(item => (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    fontWeight: '500',
    color: '#000000',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    //borderTopWidth: 0,
    //borderBottomWidth: 0,
    //padding: 0,
    //margin: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: 'orange',
    borderWidth: 2,
    borderBottomWidth: 2,
    width: '90%',
    alignSelf: 'center',
    height: 40,
  },
  searchBarInput: {
    fontSize: 16,
    height: 40,
  },
});
export default Search;
