import { AsyncStorage } from 'react-native'

const SUPER_KEY = '@Cache'

export default class StorageService {
    static async save(key, value) {
        try {
            await AsyncStorage.setItem(SUPER_KEY + key, value)
        } catch (error) {
            // Error saving data
        }
    }

    static async find(key) {
        return AsyncStorage.getItem(SUPER_KEY + key)
    }
}