import {StyleSheet} from 'react-native';
import {COLORS} from '../../utills/colors';
import {scale} from 'react-native-size-matters';
import {fonts} from '../../assets';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: scale(14),
    fontFamily: fonts.MontserratExtraBold,
    fontWeight: '800',
    color: COLORS.heading,
  },
  date: {
    fontSize: scale(14),
    fontFamily: fonts.MontserratMedium,
    color: COLORS.heading,
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  tag: {
    fontSize: scale(12),
    fontFamily: fonts.MontserratSemibold,
    color: COLORS.heading,
    backgroundColor: '#F5F7FC',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
