import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Home: FC = () => {
  const navigation = useNavigation();

  const handlePress: any = () => {
    navigation.navigate('About' as never);
  };

  return (
    <View style={styles.center}>
      <Text style={styles.defaultText}>This is the home screen</Text>
      <TouchableOpacity onPress={() => handlePress()}>
        <Text style={styles.goToText}>Go to About Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
