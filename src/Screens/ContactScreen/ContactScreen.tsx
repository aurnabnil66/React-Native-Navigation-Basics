import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const handlePress: any = () => {
    navigation.navigate('Home' as never);
  };
  return (
    <View style={styles.center}>
      <Text style={styles.defaultText}>This is the Contact screen</Text>
      <TouchableOpacity onPress={() => handlePress()}>
        <Text style={styles.goToText}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
