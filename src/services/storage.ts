import { MMKV } from 'react-native-mmkv'
import { initializeMMKVFlipper } from "react-native-mmkv-flipper-plugin";

const storage = new MMKV({
    id: `user-storage`,
    // path: `${'USER_DIRECTORY'}/storage`,
    encryptionKey: 'hunter2'
})
console.log("Storage===", storage)
// add this line inside your App.tsx
if (__DEV__) {
    initializeMMKVFlipper({ default: storage });
}

export const getAllKeys = () => {
    return storage.getAllKeys();
};

export const hasValue = (key: string) => {
    return storage.contains(key);
};

export const setStorage = (
    key: string,
    value: string | number | boolean,
) => {
    storage.set(key, value);
};

export const getStringStorage = (key: string) => {
    return storage.getString(key);
};

export const getNumberStorage = (key: string) => {
    return storage.getNumber(key);
};

export const getBooleanStorage = (key: string) => {
    return storage.getBoolean(key);
};

export const deleteStorage = (key: string) => {
    storage.delete(key);
};

export const clearStorage = () => {
    storage.clearAll();
};


export default storage

