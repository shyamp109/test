import {StyleSheet} from 'react-native';
import {height, width} from '../../utills/helper';
import {scale} from 'react-native-size-matters';
import {fonts} from '../../assets';
import {COLORS} from '../../utills/colors';

export const useStyles = () => {
  return StyleSheet.create({
    mainContainer: {},
    container: {
      height: height / 16,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width / 24,
      backgroundColor: 'white', // Ensure background is white
      elevation: 5, // Apply shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    input: {
      color: 'black',
    },
    mainContainerMultilineView: {
      height: height / 8,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width / 24,
      borderWidth: 1,
      borderColor: COLORS.textInputBorder,
      backgroundColor: 'white', // Ensure background is white
      elevation: 5, // Apply shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    view: {
      height: height / 16,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width / 24,
      borderWidth: 1,
      borderColor: COLORS.textInputBorder,
      backgroundColor: 'white', // Ensure background is white
      elevation: 5, // Apply shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    mainContainerMultilinefocus: {
      height: height / 8,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width / 24,
      borderWidth: 1,
      backgroundColor: 'white', // Ensure background is white
      elevation: 5, // Apply shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    focusedView: {
      height: height / 16,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width / 24,
      borderWidth: 1,
      backgroundColor: 'white', // Ensure background is white
      elevation: 5, // Apply shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    mainContainerMultilineError: {
      height: height / 8,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width / 24,
      borderWidth: 1,
      backgroundColor: 'white', // Ensure background is white
      elevation: 5, // Apply shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    errorView: {
      height: height / 16,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: width / 24,
      borderWidth: 1,
      backgroundColor: 'white', // Ensure background is white
      elevation: 5, // Apply shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    icon: {
      height: 20,
      width: 20,
    },
    focusedIcon: {
      height: 20,
      width: 20,
    },
    errorIcon: {
      height: 20,
      width: 20,
    },
    textInput: {
      fontSize: scale(15),
      color: COLORS.heading,
      fontFamily: fonts.MontserratSemibold,
      flex: 1,
    },
    errorText: {
      fontSize: scale(12),
      fontFamily: fonts.MontserratRegular,
      marginLeft: height * 0.02,
    },
  });
};
