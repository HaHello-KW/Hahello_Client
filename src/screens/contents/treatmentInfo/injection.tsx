import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface InjectionProps {
  number: number;
  image: any;
  title: string;
  description: string;
  //   destination: string;
}
//props: TermButtonProps

const Injection = (props: InjectionProps) => {
  const {description, number, image, title} = props;
  //   const navigation = useNavigation();
  //   const handleNavigation = () => navigation.navigate(destination);

  const testHandle = () => alert(number + '번 주사입니다.' + description);

  return (
    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
      <TouchableOpacity onPress={testHandle}>
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
