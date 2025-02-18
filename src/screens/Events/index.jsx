import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import EventCard from '../../components/EventCard';
import {useSelector} from 'react-redux';
import {useStyles} from './style';
import {api} from '../../api';
import {showError} from '../../utills/helper';
import {COLORS} from '../../utills/colors';
import CustomHeader from '../../components/CustomHeader';
import CustomNoDataFound from '../../components/CustomNoDataFound';

const Events = () => {
  const styles = useStyles();
  const {token, userInfo} = useSelector(state => state.auth);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await api.event.getEventList(token);
      const eventList = response?.data?.data?.events;
      if (Array.isArray(eventList)) {
        setEvents(eventList);
      } else {
        setEvents([]);
        showError('No events found');
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      showError(error?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [token]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.white}
        translucent={false}
        barStyle={'light-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader name={userInfo?.usr_fname} />
        <View style={{padding: 16}}>
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <FlatList
              data={events}
              renderItem={({item}) => <EventCard event={item} />}
              keyExtractor={item =>
                item?.id ? item.id.toString() : Math.random().toString()
              }
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

export default Events;
