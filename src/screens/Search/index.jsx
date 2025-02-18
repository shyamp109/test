import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../utills/colors';
import CustomHeader from '../../components/CustomHeader';
import {useSelector} from 'react-redux';
import {useStyles} from './style';

const Search = () => {
  const styles = useStyles();
  const {userInfo} = useSelector(state => state.auth);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.white}
        translucent={false}
        barStyle={'light-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader name={userInfo?.usr_fname} />
        <View style={{padding: 16}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
