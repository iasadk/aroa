import { Alert, Platform, ToastAndroid } from 'react-native';

const CustomAlert = (msg) => {
    if (Platform.OS === 'ios') {
        Alert.alert(msg);
    } else if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    }
}

export default CustomAlert
