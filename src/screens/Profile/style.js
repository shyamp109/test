import {StyleSheet} from 'react-native';
import {COLORS} from '../../utills/colors';
import {height, width} from '../../utills/helper';
import {fonts} from '../../assets';
import {scale} from 'react-native-size-matters';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    logoutContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 16,
      marginBottom: height * 0.08,
      backgroundColor: COLORS.white,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
    },
    modalContainer: {
      width: '85%',
      backgroundColor: COLORS.white,
      borderRadius: 10,
      padding: height * 0.024,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: scale(18),
      fontFamily: fonts.MontserratBold,
      color: COLORS.primary,
      marginBottom: 10,
    },
    modalMessage: {
      fontFamily: fonts.MontserratMedium,
      color: COLORS.gray,
      textAlign: 'center',
      marginTop: height * 0.01,
    },
    modalActions: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      gap: 10,
      marginTop: height * 0.04,
    },
    cancelButton: {
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    cancelButtonText: {
      color: COLORS.heading,
      fontFamily: fonts.MontserratSemibold,
      fontSize: scale(14),
    },
    logoutButton: {
      minWidth: '30%',
      textAlignL: 'center',
      paddingVertical: height * 0.015,
      backgroundColor: COLORS.primary,
      borderTopRightRadius: height * 0.04,
      borderBottomLeftRadius: height * 0.04,
    },
    logoutButtonText: {
      color: COLORS.white,
      fontFamily: fonts.MontserratMedium,
      fontSize: scale(14),
    },
  });
};
