import {View,Text,Button} from 'react-native';
import MyUpBar_2 from '../../upbar/UpBar_2';

const Q_Default_2 = ({ navigation, route }) => {
  return (
      <>
      <MyUpBar_2/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>            
          <Text>나는 </Text>
      </View>
      <Button
                title=" 난소 건강을 유지하고 싶어 "
                color="#F47100"
                onPress={() => navigation.navigate('Q_Default_3')}
            >
      </Button>
      <Button
                title=" 난자 냉동 계획이 있어 "
                color="#F47100"
                onPress={() => navigation.navigate('Q_Default_3')}
            >
      </Button>
      <Button
                title=" 난임 시술 계회이 있어 "
                color="#F47100"
                onPress={() => navigation.navigate('Q_Default_3')}
            >
      </Button>
      <Button
                title=" 현재 시술을 하고 있어 (난자 냉동, 난임 시술) "
                color="#F47100"
                onPress={() => navigation.navigate('Q_Default_3')}
            >
      </Button>
      <Button
                title=" 갱년기 준비와 관리를 하고 싶어 "
                color="#F47100"
                onPress={() => navigation.navigate('Q_Default_3')}
            >
      </Button>
      </>
  );
};

export default Q_Default_2;