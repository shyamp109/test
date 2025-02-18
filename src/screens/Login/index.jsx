import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useStyles} from './style';
import {fonts, ICONS, IMAGES} from '../../assets';
import CustomTextInput from '../../components/CustomTextInput';
import {COLORS} from '../../utills/colors';
import CustomButton from '../../components/CustomButton';
import {SCREENS} from '../../utills/const';
import {height, showError, showSuccess, width} from '../../utills/helper';
import {scale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {userData, userToken} from '../../redux/reducers/authSlice';
import {api} from '../../api';

const Login = ({navigation}) => {
  const styles = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const password = useRef(null);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    setIsLoading(true);
    const {email, password} = data;
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      const res = await api.auth.login(formData);

      if (res?.status === 200) {
        const {token, user} = res.data.data;

        dispatch(userToken(token));
        dispatch(userData(user));

        showSuccess('Login Successfully!');
        navigation.reset({
          index: 0,
          routes: [{name: SCREENS.EVENTS.name}],
        });
      } else {
        showError(res?.message || 'Login failed');
      }
    } catch (error) {
      console.log('error: ', error);
      showError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar
        backgroundColor={'#C5C5C5'}
        translucent={false}
        barStyle={'light-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View
          style={{
            paddingVertical: height * 0.025,
            alignItems: 'center',
            justifyContent: 'center',
            gap: height * 0.06,
            backgroundColor: 'lightgray',
          }}>
          <View style={{gap: 15}}>
            <Text
              style={{
                fontSize: scale(40),
                fontFamily: fonts.MontserratExtraBold,
                color: COLORS.heading,
                textAlign: 'center',
              }}>
              Plie
            </Text>
          </View>
          <Image
            source={IMAGES.logo}
            style={{
              height: height * 0.12,
              width: height * 0.12,
              resizeMode: 'contain',
            }}
          />
        </View> */}
        <Image
          source={IMAGES.bg}
          style={{
            width: width,
            height: height * 0.3,
            resizeMode: 'stretch',
            backgroundColor: '#C5C5C5',
          }}
        />
        <View style={styles.scrollviewContainer}>
          <View style={styles.mainConatiner}>
            <View style={{gap: height * 0.025}}>
              <CustomTextInput
                name="email"
                placeholder="Email"
                type="text"
                control={control}
                icon={ICONS.email}
                isLabel={'Email'}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                }}
                KeyboardType={undefined}
                onSubmitEditing={() => password?.current?.focus()}
                returnKeyType="next"
              />
              <CustomTextInput
                name="password"
                isLabel={'Password'}
                icon={ICONS.password}
                type="password"
                placeholder="Password"
                secureTextEntry
                control={control}
                rules={{
                  required: 'Password is required',
                }}
                ref={password}
                KeyboardType={undefined}
                onSubmitEditing={handleSubmit(onSignInPressed)}
                returnKeyType="next"
              />
            </View>
            <Text
              style={styles.forgotText}
              onPress={() => console.log('forgot')}>
              Forgot Your Password?
            </Text>
            <View style={styles.btn}>
              <CustomButton
                loading={isLoading}
                disabled={isLoading}
                smallButton={true}
                isColor={true}
                title="Sign In"
                onPress={handleSubmit(onSignInPressed)}
              />
            </View>
            <Text style={styles.individualText}>
              Not a member?{' '}
              <Text
                style={{
                  fontFamily: fonts.MontserratMedium,
                  fontSize: scale(14),
                  color: COLORS.heading,
                  textDecorationStyle: 'solid',
                  textDecorationLine: 'underline',
                }}
                onPress={() => console.log('regitsre')}>
                Sign Up Here
              </Text>
            </Text>
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.signInText}>or Sign In with:</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Image source={ICONS.google} style={styles.icon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Image source={ICONS.apple} style={styles.icon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Image source={ICONS.facebook} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
