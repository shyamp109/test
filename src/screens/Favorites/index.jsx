import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './style';
import {COLORS} from '../../utills/colors';
import EventCard from '../../components/EventCard';
import CustomNoDataFound from '../../components/CustomNoDataFound';
import CustomHeader from '../../components/CustomHeader';

const Favorites = ({navigation}) => {
  const styles = useStyles();
  const {favorites} = useSelector(state => state.favorites);
  const {userInfo} = useSelector(state => state.auth);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.white}
        translucent={false}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader name={userInfo?.usr_fname} />
        <View style={{padding: 16}}>
          {!favorites ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={item => item.event_date_id.toString()}
              renderItem={({item}) => <EventCard event={item} />}
              ListEmptyComponent={
                <View>
                  <CustomNoDataFound text={'No favorite events found!'} />
                </View>
              }
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
