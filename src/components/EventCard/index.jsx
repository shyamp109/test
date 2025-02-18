import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ICONS} from '../../assets';
import styles from './styles';
import {height, showError, showSuccess} from '../../utills/helper';
import {COLORS} from '../../utills/colors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/reducers/favoriteSlice';

const EventCard = ({event}) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favorites);

  const isFavorite = favorites?.some(
    fav => fav.event_date_id === event.event_date_id,
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(event));
      showError('Event Removed in to favorities Successfully');
    } else {
      dispatch(addToFavorites(event));
      showSuccess('Event Added in to favorities Successfully');
    }
  };

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{uri: event?.event_profile_img}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {event?.event_name}
        </Text>
        <Text style={styles.date}>{event?.readable_from_date}</Text>
        <Text style={styles.price}>${event?.event_price_from}</Text>

        <View style={styles.tagContainer}>
          {event?.keywords.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>

      <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
        <Image
          source={ICONS.next}
          style={{
            height: height * 0.025,
            width: height * 0.025,
            resizeMode: 'contain',
            tintColor: COLORS.heading,
          }}
        />
        <Text style={{flexGrow: 1}}>
          {event?.city} {event?.country}
        </Text>

        <TouchableOpacity onPress={toggleFavorite} style={styles.actions}>
          <Image
            source={isFavorite ? ICONS.favFill : ICONS.heart}
            style={{
              height: height * 0.025,
              width: height * 0.025,
              resizeMode: 'contain',
              tintColor: isFavorite ? COLORS.primary : COLORS.heading,
            }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
