import AsyncStorage from '@react-native-async-storage/async-storage';




const storeItem = async (keyValueObject) => {
    try {
      await AsyncStorage.setItem(`${keyValueObject.key}`, keyValueObject.value)
    } catch (e) {
      // saving error
    }
}

const retrieveItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(`${key}`)
      if(value !== null) {
        return value;
      }
      return false;
    } catch(e) {
      return e
    }
}

const purgeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(`${key}`)
    } catch(e) {
      // remove error
    }
}

export default AsyncSessionStorage = {
  storeItem, retrieveItem, purgeItem
}
