import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, {useState} from 'react';
import typescript from 'react-native-svg';

Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

type props = {
  Type_of_Picker: string;
};

function PType({Type_of_Picker}: props) {
  const date = new Date();
  const year = date.getFullYear();
  var month_ = date.getMonth() + 1;
  const month = month_.toString();
  const day = date.getDate().toString();

  const placeholder = '날짜를 입력해주세요';

  var con_day;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  if (Type_of_Picker == 'datePicker') {
    const handleConfirm = date => {
      hideDatePicker();
      onChangeText(date.format('yyyy년 MM월 dd일'));
    };

    con_day = year + '년 ' + month + '월 ' + day + '일 ';

    return (
      <>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            pointerEvents="none"
            style={styles.textInput}
            placeholder={con_day}
            placeholderTextColor="#C1C1C1"
            underlineColorAndroid="transparent"
            editable={false}
            value={text}
          />
          <DateTimePickerModal
            headerTextIOS={placeholder}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </>
    );
  } else if (Type_of_Picker == 'yearPicker') {
    const handleConfirm = date => {
      hideDatePicker();
      onChangeText(date.format('yyyy년'));
    };

    con_day = year + '년 ';

    return (
      <>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            pointerEvents="none"
            style={styles.textInput}
            placeholder={con_day}
            placeholderTextColor="#C1C1C1"
            underlineColorAndroid="transparent"
            editable={false}
            value={text}
          />
          <DateTimePickerModal
            headerTextIOS={placeholder}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </>
    );
  } else if (Type_of_Picker == 'numberPicker') {
    return (
      <>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            keyboardType="decimal-pad"
            style={styles.textInput}
            placeholder="n"
            placeholderTextColor="#C1C1C1"
            underlineColorAndroid="transparent"
          />
        </TouchableOpacity>
      </>
    );
  } else if (Type_of_Picker == 'none') {
    return <></>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //flex를 zero로 하여 두번째 줄에 바로 이어가게
  container_t: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 24,
    fontWeight: '400',
    color: '#f47100',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
});

export default PType;
