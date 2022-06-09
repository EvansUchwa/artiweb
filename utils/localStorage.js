import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataOnLocal = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value;
    } catch (e) {
        // error reading value
    }
}
export const storeDataToLocal = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        // saving error
    }
}

export async function removeItemValue(key) {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch (exception) {
        return false;
    }
}

