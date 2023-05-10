import {Image, StyleSheet, Text, View} from 'react-native';

interface ProcedureProps {
  number: number;
  image: any;
  title: string;
  description: string;
}

const Procedure = (props: ProcedureProps) => {
  const {number, image, title, description} = props;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.number}>
          <Text style={styles.numberTxt}>{number}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{justifyContent: 'flex-start'}}>
        <Image style={styles.image} source={image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
export default Procedure;

const styles = StyleSheet.create({
  number: {
    width: 32,
    height: 32,
    backgroundColor: '#F47100',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  numberTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  image: {
    width: 160,
    height: 132,
  },
  title: {
    marginHorizontal: 7,
    marginBottom: 7,
    fontSize: 16,
  },
  description: {
    width: 150,
    fontSize: 12,
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 10,
  },
});
