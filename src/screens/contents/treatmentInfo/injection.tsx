import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface InjectionProps {
  number: number;
  image: any;
  title: string;
  description: string;
  destination: string;
  injectionData: any;
  index: number;
}
//props: TermButtonProps

const Injection = (props: InjectionProps) => {
  const {number, image, title, description, destination, injectionData, index} =
    props;
  const navigation = useNavigation();
  const handleNavigation = () =>
    navigation.navigate(destination, {injectionData, index});

  // const testHandle = () => alert(number + '번 주사입니다.' + description);

  return (
    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
      <TouchableOpacity onPress={handleNavigation}>
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          marginTop: 5,
          marginLeft: 5,
          marginBottom: 25,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Injection;

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 132,
  },
});
