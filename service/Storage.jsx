import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorageItem = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorageItem = async (key, value) => {
    const item = await AsyncStorage.getItem(key);
    return JSON.parse(item)
}

export const clearStorage = async (key, value) => {
    await AsyncStorage.clear();
}