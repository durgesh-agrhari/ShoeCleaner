import {Image, SafeAreaView, StyleSheet,} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <SafeAreaView>
      <Image source={require('../../assets/shoe.png')} style={styles.image} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 900,
  },
});
