import Toast, { ToastShowParams } from 'react-native-toast-message';

export default class Toaster {
    static error(options: ToastShowParams) {
        Toast.show({
            type: 'error',
            position: 'bottom',
            onPress: Toast.hide,
            ...options,
        });
    }

    static success(options: ToastShowParams) {
        Toast.show({
            type: 'success',
            position: 'bottom',
            onPress: Toast.hide,
            ...options,
        });
    }

    static info(options: ToastShowParams) {
        Toast.show({
            type: 'info',
            position: 'bottom',
            onPress: Toast.hide,
            ...options,
        });
    }
}
