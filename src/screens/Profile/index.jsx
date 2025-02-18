import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../utills/colors';
import CustomHeader from '../../components/CustomHeader';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './style';
import {userToken} from '../../redux/reducers/authSlice';
import {SCREENS} from '../../utills/const';
import {height} from '../../utills/helper';
import {ICONS} from '../../assets';
import CustomButton from '../../components/CustomButton';

const Profile = ({navigation}) => {
  const styles = useStyles();
  const {userInfo} = useSelector(state => state.auth);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userToken(null));
    setLogoutVisible(false);
    navigation.reset({
      index: 0,
      routes: [{name: SCREENS.LOGIN.name}],
    });
  };
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
      <View style={styles.logoutContainer}>
        <CustomButton title="Logout" onPress={() => setLogoutVisible(true)} />
      </View>
      {logoutVisible && (
        <Modal
          transparent={true}
          visible={logoutVisible}
          animationType="fade"
          onRequestClose={() => setLogoutVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={() => setLogoutVisible(false)}>
                <Image
                  source={ICONS.close}
                  style={{
                    height: height * 0.03,
                    width: height * 0.03,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Confirm Logout?</Text>
              <Text style={styles.modalMessage}>
                Are you sure you want to logout?
              </Text>
              <View style={styles.modalActions}>
                <CustomButton
                  title={'Logout'}
                  smallButton
                  onPress={() => handleLogout()}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Profile;
