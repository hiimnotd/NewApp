import {NativeModules} from 'react-native';

const {ForgotPassword} = NativeModules;
export const ShowToast = (msg: string) => {
  ForgotPassword.ToastShow(msg);
};
