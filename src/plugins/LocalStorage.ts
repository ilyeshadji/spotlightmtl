import { STORAGE_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../store/store.ts';
import { initDone } from '../store/features/Init/landingSlice.ts';

export default class LocalStorage {
    constructor() {
        this._PIN = null;
        this.init();
    }

    _PIN: string | null;

    get PIN(): string | null {
        return this._PIN;
    }

    async init() {
        this._PIN = await AsyncStorage.getItem(`${STORAGE_KEY}:PIN`);
        store.dispatch(initDone());
    }

    async setPIN(PIN: string) {
        this._PIN = PIN;
        await AsyncStorage.setItem(`${STORAGE_KEY}:PIN`, PIN);
    }
}
